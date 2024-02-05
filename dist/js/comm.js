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

var string = "HYUNKI KIM'S PORTFOLIO"; //출력할 문자열을 변수 string에 할당합니다.
var str = string.split(""); // 문자열을 한 글자씩 나누어 배열로 만듭니다. 이렇게 하면 문자열의 각 문자를 배열의 요소로 갖게 됩니다.
var el = document.getElementById("str"); // HTML 문서에서 id가 'str'인 요소를 찾아서 el 변수에 할당합니다. 이 요소는 JavaScript로 제어될 대상이며, 문자열이 출력될 곳입니다.
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  //str 배열의 길이가 0보다 크면, 배열의 첫 번째 요소를 el 요소의 innerHTML에 추가합니다. 추가된 요소는 배열에서 제거됩니다. 그렇지 않으면, setTimeout 함수를 종료합니다.
  var running = setTimeout(animate, 90);
  // animate 함수를 90밀리초마다 호출하여 애니메이션 효과를 생성합니다.
})(); // 익명 함수를 정의하고 즉시 호출합니다. 이 함수는 애니메이션을 실행합니다.

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
