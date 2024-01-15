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

$(document).ready(function () {
  $(".tab-menu").click(function () {
    $(".tab").removeClass("active_menu");
    $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass(
      "active_menu"
    );
    $(".tab-menu").removeClass("active");
    $(this).parent().find(".tab-menu").addClass("active");
  });
});
