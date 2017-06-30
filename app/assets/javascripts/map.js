function buildHiddenField(crd){
  var field = '<input type=hidden name=lat value=' + crd.latitude + '>' +
              '<input type=hidden name=lng value=' + crd.longitude + '>';
  $("#new_log").append(field);
}

function getNowPosition(pos){
  buildHiddenField(pos.coords);
}

function displayMap(pos) {
  var mapLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

  var mapOptions = {
    zoom : 17,
    center : mapLatLng
  };

  var map = new google.maps.Map(
    document.getElementById("map"),
    mapOptions
  );

  var currentPositionImage = new google.maps.MarkerImage(
    'http://waox.main.jp/png/source-bluedot.png',
    null,
    null,
    new google.maps.Point( 8, 8 ),
    new google.maps.Size( 30, 30 )
  );

  var lureImage = new google.maps.MarkerImage(
    '/assets/fish.png',
    null,
    null,
    new google.maps.Point( 8, 8 ),
    new google.maps.Size( 50, 50 )
  );

  var lureImage2 = new google.maps.MarkerImage(
    '/assets/fish.png',
    null,
    null,
    new google.maps.Point( 8, 8 ),
    new google.maps.Size( 80, 80 )
  );

  var marker = new google.maps.Marker({
    icon : currentPositionImage,
    flat : true,
    map : map,
    position : mapLatLng,
    title : "現在地",
    visible : true,
    animation : 0
  });

  var markers = [];

  var logs = document.getElementsByClassName("container");

  for(var i = 0; i < logs.length; i ++){
    var lat = logs[i].getAttribute("data-lat");
    var lng = logs[i].getAttribute("data-lng");
    var markerLatLng = new google.maps.LatLng({lat: parseFloat(lat), lng: parseFloat(lng)});
    markers[i] = new google.maps.Marker({
      map : map,
      position : markerLatLng,
      icon: lureImage,
      visible : true,
      flat : true
    });
  }

  var preClickNum;

  function markerEvent(i) {
    if(preClickNum == i){
      switch(markers[i - 1].icon.size.height){
        case 50:
          markers[i - 1].setIcon(lureImage2);
          preClickNum = i;
          break;
        case 80:
          markers[i - 1].setIcon(lureImage);
          preClickNum = i;
          break;
      }
    }else{
      switch(markers[i - 1].icon.size.height){
        case 50:
          if(preClickNum){
            markers[preClickNum - 1].setIcon(lureImage);
          }
          markers[i - 1].setIcon(lureImage2);
          preClickNum = i;
          break;
      }
    }
  };

  var sideLogs = $(".container");

  for(var i = 0; i < sideLogs.length; i ++){
    $(sideLogs[i]).on("click", function(){
      markerEvent($(this).data("num"));
    });
  };
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

if(window.location.href == 'http://localhost:3000/logs/new'){
  navigator.geolocation.getCurrentPosition(getNowPosition, error);
}else if(window.location.href == "http://localhost:3000/map"){
  navigator.geolocation.getCurrentPosition(displayMap, error);
}else{
  console.log("map.js dose not work at here");
}
