$(function() {
  //メニューの開閉
  $(".menubtn").click(function() {
    $(".menu").animate({"margin-left":0},200);
  });
  $(".close_btn").click(function() {
    $(".menu").animate({"margin-left":-100+"%"},200);
  });

  //肉モーダル
  $(".meat_data").hide();
  $(".meat_btn").click(function() {
    var target=$(this).data("target");
    $("#"+target).fadeIn();
  });
  $(".data_close_btn").click(function() {
    var closeTarget=$(this).parent().attr("id");
    $("#"+closeTarget).fadeOut();
  });

  //背景画像フェード自動切換え
  var speed=1000;
  var interval=5000;
  var count=0;
  var slide=$(".slide");
  var length=slide.length-1;
  setInterval(function() {
    $(slide[count]).fadeOut(speed);
    if(count>=length) {
      count=0;
    }else {
      count++;
    }
    $(slide[count]).fadeIn(speed);
  },interval);
});