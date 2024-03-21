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
  navigationTooltips: [
    "HOME",
    "PROFILE",
    "SKILL",
    "GOAL",
    "PRADA",
    "GHIBLI",
    "CONTACT",
  ],
  anchors: ["HOME", "PROFILE", "SKILL", "GOAL", "PRADA", "GHIBLI", "CONTACT"],
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
