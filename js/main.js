$(document).ready(function () {
  // aos 연결
  AOS.init();

  $('.gnb a').click(function(e) {
    e.preventDefault(); // 기본 앵커 동작 방지
    var target = $(this.hash); // 클릭한 링크의 href 값 가져오기
    
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800); // 800ms 동안 부드럽게 이동
    }
});

$(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    
    $('.gnb a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        if (refElement.position().top <= scrollPos + 100 && 
            refElement.position().top + refElement.height() > scrollPos + 100) {
            $('.gnb a').removeClass("active");
            currLink.addClass("active");
        }
    });
});
});