$(document).ready(function () {
  // .header를 저장
  let header = $('.header');
  let depth1 = $('.depth1');

  depth1.mouseenter(function () {
    header.addClass('header-open');
  });

  depth1.mouseleave(function () {
    header.removeClass('header-open');
  });

  // 주메뉴 포커스 기능
  let depth_1_Li = $('.depth1 > li');

  $.each(depth_1_Li, function (index) {
    $(this).mouseenter(function () {
      depth_1_Li.find('>a').removeClass('depth1-focus');
      //li의 > a를 찾는다.
      $(this).find('>a').addClass('depth1-focus');
    });
    $(this).mouseleave(function () {
      //li의 > a를 찾는다.
      $(this).find('>a').removeClass('depth1-focus');
      depth_1_Li.eq(1).find('>a').addClass('depth1-focus');
    });
  });

  // 컨텐츠 이동 버튼
  let visualBt = $('.visual-bt');
  visualBt.click(function () {

  });


  //part 배경 배치
  let partListLi = $('.part-list li');
  let partListW = 1200 / partListLi.length;
  $.each(partListLi, function (index) {
    let tgX = partListW * index;
    tgX = -1 * tgX;
    $(this).css('background-position-x', tgX);
  });
});