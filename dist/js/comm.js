new fullpage("#fullpage", {
  //options here
  //  autoScrolling: true,
  //  scrollHorizontally: true,
  //  navigationTooltips: ["a", "b", "c", "d"],
  //  anchors: ["INTRO", "PROFILE", "PORTFOLIO", "CONTACT"],
  //  menu: ["#navbar-nav", "#fp-nav"],
  //  navigationPosition: "le",

  navigation: true,
  responsiveWidth: 700,
  navigationTooltips: ["HOME", "ABOUT", "SKILL", "PORTFOLIO", "CONTACT"],
  anchors: ["INTRO", "PROFILE", "SKILL", "PORTFOLIO", "CONTACT"],
  menu: ["#navbar-nav"],
  parallax: true,
  onLeave: function (origin, destination, direction) {
    console.log("Leaving section" + origin.index);
  },
});

$(document).ready(function () {
  //$(document).ready(function () {...}); 이부분은 문서가 완전히 로드되면 실행되는 jQuery 코드를 정의함.
  $(".tab-menu").click(function () {
    //$(".tab-menu").click(function () {...});: 이부분은 클래스가 "tab-menu"인 요소가 클릭되었을 때 실행이됨. 이것은 각 탭의 메뉴를 나타내는 것
    $(".tab").removeClass("active_menu");
    //$(".tab").removeClass("active_menu");: 모든 "tab" 클래스를 가진 요소에서 "active_menu" 클래스를 제거함. 이는 현재 활성화된 탭을 나타내는 클래스
    $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass(
      "active_menu"
    );
    //$(".tab[data-id='" + $(this).attr("data-id") + "']").addClass("active_menu");: 클릭된 탭에 대해 해당하는 "tab" 클래스를 가진 요소에 "active_menu" 클래스를 추가합니다. 이로써 클릭된 탭이 활성화함
    $(".tab-menu").removeClass("active");
    //$(".tab-menu").removeClass("active");: 모든 "tab-menu" 클래스를 가진 요소에서 "active" 클래스를 제거함. 이는 현재 활성화된 탭 메뉴를 나타내는 클래스
    $(this).parent().find(".tab-menu").addClass("active");
    // $(this).parent().find(".tab-menu").addClass("active");: 클릭된 탭의 부모 요소에서 찾은 "tab-menu" 클래스를 가진 요소에 "active" 클래스를 추가함. 이로써 클릭된 탭 메뉴가 활성화함.
  });
});
