$(document).ready(function () {
  // html 태그의 lang 을 알아보자.
  
  
  // .header를 저장
  let header = $('.header');
  let depth1 = $('.depth1');
  let gnb = $('.gnb');

  // 펼쳐 졌을 때에 높이값
let gnbMaxHeight = gnb.outerHeight();
// 닫혔을 때에 높이값
let gnbMinHeight = header.outerHeight();
console.log(gnbMinHeight);
// 기본 header의 높이값 적용
header.css('height', gnbMinHeight);


  depth1.mouseenter(function () {
    header.css('height', gnbMaxHeight);
  });

  depth1.mouseleave(function () {
    header.css('height', gnbMinHeight);
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
  // .part 영역이 html의 상단으로 부터 떨어진 px값
  let partY = $('.part').offset().top;
  visualBt.click(function () {
    $('html').stop().animate({
      scrollTop: partY
    },500);
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