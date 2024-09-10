$(function () {
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function () {
    // テキストボックスの値を変更する
    $('.text-box').val('クリックしました！');
  });
});