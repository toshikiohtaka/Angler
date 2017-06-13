function initMap() {
  // Geolocation APIに対応している
  if (navigator.geolocation) {
    console.log(navigator.geolocation);
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(
      // 取得成功した場合
      function(position) {
        // 緯度・経度を変数に格納
        var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // マップオプションを変数に格納
        var mapOptions = {
          zoom : 17,          // 拡大倍率
          center : mapLatLng  // 緯度・経度
        };
        // マップオブジェクト作成
        var map = new google.maps.Map(
          document.getElementById("map"), // マップを表示する要素
          mapOptions         // マップオプション
        );
        // マップにマーカーを表示する
        var marker = new google.maps.Marker({
          map : map,             // 対象の地図オブジェクト
          position : mapLatLng   // 緯度・経度
        });
      },
      // 取得失敗した場合
      function(error) {
        // エラーメッセージを表示
        switch(error.code) {
          case 1: // PERMISSION_DENIED
            alert("位置情報の利用が許可されていません");
            break;
          case 2: // POSITION_UNAVAILABLE
            alert("現在位置が取得できませんでした");
            break;
          case 3: // TIMEOUT
            alert("タイムアウトになりました");
            break;
          default:
            alert("その他のエラー(エラーコード:"+error.code+")");
            break;
        }
      }
    );
  // Geolocation APIに対応していない
  } else {
    alert("この端末では位置情報が取得できません");
  }
}

function buildHiddenField(crd){
  var field = '<input type=hidden name=lat value=' + crd.latitude + '>' +
              '<input type=hidden name=lng value=' + crd.longitude + '>';
  $("#new_log").append(field);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  buildHiddenField(crd);
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

var url = window.location.href;

if(url == "http://localhost:3000/logs/new" || url == "http://localhost:3000/map"){
  navigator.geolocation.getCurrentPosition(success, error);
}
