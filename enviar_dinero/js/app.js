$(function() {
  $("#sidebar-switch").click(function() {
    $("#sidebar-container").toggleClass("sidebar-collapse");
    $("#sidebar-wrapper").toggleClass("sidebar-collapse");
    $("#blue-sticky-box").toggleClass("blue-box-extended");
    $("#top-navbar").toggleClass("top-navbar-extended");
    $("#secondary-nav").toggleClass("top-navbar-extended");
    $(".title").toggleClass("title-collapse");
    $("#user-text").toggleClass("user-collapse");
  });

  $(".title").click(function() {
    $("#sidebar-container").toggleClass("sidebar-collapse");
    $("#sidebar-wrapper").toggleClass("sidebar-collapse");
    $("#blue-sticky-box").toggleClass("blue-box-extended");
    $("#top-navbar").toggleClass("top-navbar-extended");
    $("#secondary-nav").toggleClass("top-navbar-extended");
    $(".title").toggleClass("title-collapse");
    $("#user-text").toggleClass("user-collapse");
  });

  $("#demo1").click(function() {
    $("#send-recieve-nav").toggleClass("show-secondary-nav");
  });
  $("#search-user").focus(function() {
    $("#carousel-container").addClass("carousel-show");
  });
  // $("#search-user").blur(function() {
  //   $("#carousel-container").removeClass("carousel-show");
  // });
  $("#next-btn").click(function() {
    $("#user-img-container").addClass("slide-carousel-hide");
    setTimeout(() => {
      $("#user-img-container").removeClass("slide-carousel-hide");
    }, 600);
  });
  $("#back-btn").click(function() {
    $("#user-img-container").addClass("slide-carousel-hide");
    setTimeout(() => {
      $("#user-img-container").removeClass("slide-carousel-hide");
    }, 600);
  });
});
