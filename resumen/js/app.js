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
    $("#secondary-nav").toggleClass("show-secondary-nav");
    $("body").toggleClass("pad-body");
    $(".advertising-side").toggleClass("adver-down");
  });
  $("#hide").click(function() {
    $("#carousel-container").toggleClass("carousel-hide");
  });
  $("#toggle-1").click(function() {
    $("#fold-1").toggleClass("open");
  });
  $("#toggle-2").click(function() {
    $("#fold-2").toggleClass("open");
  });
  $("#toggle-3").click(function() {
    $("#fold-3").toggleClass("open");
  });
  $("#toggle-4").click(function() {
    $("#fold-4").toggleClass("open");
  });
});
