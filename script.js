var $animated = $('.box');

$(window).on('scroll', function () {
    // スクロール量を取得
    var scroll = $(window).scrollTop();
    // 画面の高さを取得
    var windowHeight = $(window).height();
  
    // 要素が画面内に入ったかどうかを判定し、
    // 要素の高さの半分が画面外に出たかどうかも判定する関数
    function isHalfShown($elem) {
        // 要素の位置を取得
        var elemTop = $elem.offset().top;
        // 要素の高さを取得
        var elemHeight = $elem.outerHeight();
        // 要素の高さの半分が画面外に出たかどうか判定
        var halfHeight = elemHeight / 2;
        // 要素の高さの半分が画面内にあり、かつ、要素の高さの半分が画面の下部に接触していない場合にtrueを返す
        return scroll + windowHeight > elemTop + halfHeight && scroll < elemTop + elemHeight - halfHeight;
    }
  
    // 各.box要素（.h1, .h2, .h3）に対してチェックを行い、
    // 要素の高さの半分が画面内に入った時に 'is-show' クラスを付与し、
    // 要素の高さの半分が画面外に出た時には削除する
    $('.box').each(function () {
        if (isHalfShown($(this))) {
            $(this).addClass('is-show');
        } else {
            $(this).removeClass('is-show');
        }
    });
});
