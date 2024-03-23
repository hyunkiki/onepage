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

let el = document.getElementsByTagName("h1")[0];
let items = el.dataset.items.split(", ");
TweenMax.to(el.nextElementSibling, 4, {
  opacity: 0,
  repeat: -1,
  ease: Linear.easeNone,
});

let tl = new TimelineMax({ repeat: -1 });

let tmp = { x: 0 };

items.forEach((word, idx) => {
  let chars = word.split("");

  chars.forEach((char) => {
    tl.to(tmp, 0.1, {
      x: "+=" + 1,
      onComplete: () => {
        el.textContent += char;
      },
    });
  });

  tl.to(tmp, 1, { x: "+=" + 1 });

  chars.forEach((char) => {
    tl.to(tmp, 0.15, {
      x: "+=" + 1,
      onComplete: () => {
        el.textContent = el.textContent.slice(0, -1);
      },
    });
  });
});
