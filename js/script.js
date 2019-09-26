jQuery(function($){
    $('.jq-popup').magnificPopup({ 
        type: 'image'
        // その他のオプション（必要であれば）
    });
});

var navFlg = false;
$('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
    if(!navFlg){
        $('.gnav__menu__item').each(function(i){
            $(this).delay(i*300).animate({
                'margin-left' : 0,
                'opacity' : 1,
            },500);
        });
        navFlg = true;
    }
    else{
        $('.gnav__menu__item').css({
            'margin-left' : 100,
            'opacity' : 0,
        });
        navFlg = false;
    }
});

var rellax = new Rellax(' .rellax ');

// スムーススクロール
$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
  });

//ローディングアニメーション
var $delayTime = 1000;

$(window).on('load', function(){
  var $loadingAnim = $('#loadingAnim'),
      $body = $('body');

    setTimeout( function(){
        
      $body.addClass('loaded');
  
      $loadingAnim.find('.loadingAnim_line').on('transitionend', function( e ){ 
        $(this).parent().remove(); }); }, $delayTime );
 });