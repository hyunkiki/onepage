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

var strings = ["HYUNKI KIM'S", "PORTFOLIO"]; // 출력할 문자열을 배열로 나눕니다.
var el = document.getElementById("str"); // HTML 문서에서 id가 'str'인 요소를 찾아서 el 변수에 할당합니다.

function animateStrings(index) {
  var string = strings[index];
  var str = string.split(""); // 문자열을 한 글자씩 나누어 배열로 만듭니다.
  var interval = setInterval(function () {
    if (str.length > 0) {
      el.innerHTML += str.shift(); // 배열의 첫 번째 요소를 el 요소의 innerHTML에 추가합니다.
    } else {
      clearInterval(interval); // 모든 문자열이 출력되면 interval을 종료합니다.
      if (index < strings.length - 1) {
        el.innerHTML += "<br>"; // 줄바꿈을 추가합니다.
        animateStrings(index + 1); // 다음 문자열을 출력하기 위해 재귀적으로 함수를 호출합니다.
      }
    }
  }, 90);
}

animateStrings(0); // 함수 호출로 애니메이션을 시작합니다.

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
