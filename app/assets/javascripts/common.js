$(document).ready(function(){
  console.log("できてる");
  $("#toggler-btn").click(function(){
    console.log("ここもできてる");
    $(".navbar-collapse").collapse('hide');
  });
});
