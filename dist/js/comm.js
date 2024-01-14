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
  navigationTooltips: ["HOME", "ABOUT", "PORTFOLIO", "CONTACT"],
  anchors: ["INTRO", "PROFILE", "PORTFOLIO", "CONTACT"],
  menu: ["#navbar-nav"],
  parallax: true,
  onLeave: function (origin, destination, direction) {
    console.log("Leaving section" + origin.index);
  },
});

// HTML 문서에서 클래스가 "tab_title"인 모든 anchor 요소를 선택합니다.
const tab_title = document.querySelectorAll(".tab_title a");

// HTML 문서에서 클래스가 "tab_contents"인 모든 container 요소를 선택합니다.
const tab_contents = document.querySelectorAll(".tab_contents .project_wrap");

// 모든 tab_contents의 display 속성을 'none'으로 설정하여 숨깁니다.
for (let j of tab_contents) {
  j.style.display = "none";
}

// 첫 번째 tab_contents 요소의 display 속성을 'flex'로 설정하여 초기화면을 보여줍니다.
tab_contents[0].style.display = "flex";

// 각 탭에 대한 이벤트 리스너를 등록합니다.
tab_title.forEach(function (t, i) {
  t.addEventListener("click", function (e) {
    // 기본 동작을 막습니다. (여기서는 앵커의 클릭 동작)
    e.preventDefault();

    // 모든 tab_contents를 숨깁니다.
    for (let j of tab_contents) {
      j.style.display = "none";
    }

    // 모든 tab_title에서 'active' 클래스를 제거합니다.
    for (let n of tab_title) {
      n.classList.remove("active");
    }

    // 클릭된 탭에 해당하는 tab_contents를 보여주고, 클릭된 탭에 'active' 클래스를 추가합니다.
    tab_contents[i].style.display = "flex";
    t.classList.add("active");
  });
});
