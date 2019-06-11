$(function() {
  $("#sidebar-switch").click(function() {
    $("#sidebar-container").toggleClass("sidebar-collapse");
    $("#sidebar-wrapper").toggleClass("sidebar-collapse");
    $("#blue-sticky-box").toggleClass("blue-box-extended");
    $("#top-navbar").toggleClass("top-navbar-extended");
    $("#secondary-nav").toggleClass("top-navbar-extended");
    $(".title").toggleClass("d-none");
    $("#user-text").toggleClass("user-collapse");
  });

  $(".title").click(function() {
    $("#sidebar-container").toggleClass("sidebar-collapse");
    $("#sidebar-wrapper").toggleClass("sidebar-collapse");
    $("#blue-sticky-box").toggleClass("blue-box-extended");
    $("#top-navbar").toggleClass("top-navbar-extended");
    $("#secondary-nav").toggleClass("top-navbar-extended");
    $(".title").toggleClass("d-none");
    $("#user-text").toggleClass("user-collapse");
  });

  $("#demo1").click(function() {
    $("#secondary-nav").toggleClass("show-secondary-nav");
    $("#body-row").toggleClass("pad-body");
    $(".advertising-side").toggleClass("adver-down");
  });

  $("#activate-modal").click(function() {
    $("#recarga-saldo-modal").toggleClass("show-modal");
  });

  $("#filter-btn-resume").click(function() {
    $("#filter-ops-container").toggleClass("show-filter-ops");
  });

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

  $("#search-user").focus(function() {
    $("#carousel-container").addClass("carousel-show");
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
