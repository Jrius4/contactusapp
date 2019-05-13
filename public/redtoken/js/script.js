(function($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader")
        .delay(200)
        .fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var sticky_header = $(".main-header .sticky-header, .header-style-five");
      var scrollLink = $(".scroll-to-top");
      if (windowpos > 1) {
        siteHeader.addClass("fixed-header");
        sticky_header.addClass("animated slideInDown");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        sticky_header.removeClass("animated slideInDown");
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
    );

    //Dropdown Button
    $(".main-header .navigation li.dropdown .dropdown-btn").on(
      "click",
      function() {
        $(this)
          .prev("ul")
          .slideToggle(500);
      }
    );

    //Dropdown Button
    $(".main-header .navigation li.dropdown > a").on("click", function() {
      $(this)
        .next("ul")
        .slideToggle(500);
    });

    //Disable Dropdown Link
    $(".main-header .navigation li.dropdown > a").on("click", function(e) {
      e.preventDefault();
    });
  }

  //Banner Carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: false,
      margin: 30,
      nav: true,
      singleItem: true,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      autoplayTimeout: 10000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  }

  //Parallax Scene for Icons
  if ($(".parallax-scene-1").length) {
    var scene = $(".parallax-scene-1").get(0);
    var parallaxInstance = new Parallax(scene);
  }
  if ($(".parallax-scene-2").length) {
    var scene = $(".parallax-scene-2").get(0);
    var parallaxInstance = new Parallax(scene);
  }

  // Single Item Carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      //animateOut: 'slideOutDown',
      //animateIn: 'fadeIn',
      loop: true,
      margin: 30,
      nav: true,
      singleItem: true,
      smartSpeed: 700,
      autoHeight: false,
      autoplay: true,
      autoplayTimeout: 10000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  }

  // Factory Logos Carousel
  if ($(".three-item-carousel").length) {
    $(".three-item-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        },
        1280: {
          items: 3
        }
      }
    });
  }

  // Team Carousel
  if ($(".team-carousel").length) {
    $(".team-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        },
        1280: {
          items: 3
        }
      }
    });
  }

  if ($(".timer").length) {
    $(function() {
      $("[data-countdown]").each(function() {
        var $this = $(this),
          finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function(event) {
          $this.html(event.strftime("%D days %H:%M:%S"));
        });
      });
    });

    $(".cs-countdown")
      .countdown("")
      .on("update.countdown", function(event) {
        var $this = $(this).html(
          event.strftime(
            '<div class="count-col"><span>%m</span><h6>Months</h6></div> <div class="count-col"><span>%d</span><h6>days</h6></div> <div class="count-col"><span>%H</span><h6>Hours</h6></div> <div class="count-col count-mints"><span>%M</span><h6>Minutes</h6></div> <div class="count-col count-secs"><span>%S</span><h6>Seconds</h6></div>'
          )
        );
      });
  }

  // Sponsors Carousel
  if ($(".sponsors-carousel").length) {
    $(".sponsors-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        768: {
          items: 3
        },
        800: {
          items: 3
        },
        1024: {
          items: 5
        },
        1200: {
          items: 6
        }
      }
    });
  }

  // Testimonials Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 500,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>'
      ],
      responsive: {
        0: {
          items: 1
        },
        764: {
          items: 1
        },
        800: {
          items: 2
        },
        1024: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    });
  }

  //Adjust Home 2 Slider Pagers Width
  function fixThumbWidth() {
    if ($(".thumbs-outer .thumbs-carousel").length) {
      var windowWidth = $(window).width();
      var targetContainer = $(".thumbs-outer .thumbs-carousel");
      if (windowWidth < 1170) {
        targetContainer.css("max-width", windowWidth / 3);
      }
      if (windowWidth < 768) {
        targetContainer.css("max-width", windowWidth / 2);
      }
      if (windowWidth < 600) {
        targetContainer.css("max-width", windowWidth - 30);
      }
      if (windowWidth > 1170) {
        targetContainer.css("max-width", "390px");
      }
    }
  }

  fixThumbWidth();

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function() {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate(
            {
              countNum: n
            },
            {
              duration: r,
              easing: "linear",
              step: function() {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function() {
                $t.find(".count-text").text(this.countNum);
              }
            }
          );
        }
      },
      { accY: 0 }
    );
  }

  //Masonary
  function enableMasonry() {
    if ($(".masonry-items-container").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".masonry-items-container");

      $container.isotope({
        itemSelector: ".masonry-item",
        masonry: {
          columnWidth: ".masonry-item.col-lg-6"
        },
        animationOptions: {
          duration: 500,
          easing: "linear"
        }
      });

      winDow.bind("resize", function() {
        $container.isotope({
          itemSelector: ".masonry-item",
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
      });
    }
  }

  enableMasonry();

  //Sortable Masonary with Filters
  function sortableMasonry() {
    if ($(".sortable-masonry").length) {
      var winDow = $(window);
      // Needed variables
      var $container = $(".sortable-masonry .items-container");
      var $filter = $(".filter-btns");

      $container.isotope({
        filter: "*",
        masonry: {
          columnWidth: ".masonry-item.col-lg-4"
        },
        animationOptions: {
          duration: 500,
          easing: "linear"
        }
      });

      // Isotope Filter
      $filter.find("li").on("click", function() {
        var selector = $(this).attr("data-filter");

        try {
          $container.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
        } catch (err) {}
        return false;
      });

      winDow.on("resize", function() {
        var selector = $filter.find("li.active").attr("data-filter");

        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
      });

      var filterItemA = $(".filter-btns li");

      filterItemA.on("click", function() {
        var $this = $(this);
        if (!$this.hasClass("active")) {
          filterItemA.removeClass("active");
          $this.addClass("active");
        }
      });
    }
  }

  sortableMasonry();

  //Gallery Filters
  if ($(".filter-list").length) {
    $(".filter-list").mixItUp({});
  }

  //Make Content Sticky
  if ($(".sticky-box").length) {
    var a = new StickySidebar(".portfolio-single .content-column .inner", {
      topSpacing: 80,
      bottomSpacing: 0,
      containerSelector: ".sticky-container",
      innerWrapperSelector: ".sticky-box"
    });
  }

  //Progress Bar
  if ($(".progress-line").length) {
    $(".progress-line").appear(
      function() {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      { accY: 0 }
    );
  }

  //LightBox / Fancybox
  if ($(".lightbox-image").length) {
    $(".lightbox-image").fancybox({
      openEffect: "fade",
      closeEffect: "fade",
      helpers: {
        media: {}
      }
    });
  }

  //Accordion Box
  if ($(".accordion-box").length) {
    $(".accordion-box").on("click", ".acc-btn", function() {
      var outerBox = $(this).parents(".accordion-box");
      var target = $(this).parents(".accordion");

      if ($(this).hasClass("active") !== true) {
        $(outerBox)
          .find(".accordion .acc-btn")
          .removeClass("active");
      }

      if (
        $(this)
          .next(".acc-content")
          .is(":visible")
      ) {
        return false;
      } else {
        $(this).addClass("active");
        $(outerBox)
          .children(".accordion")
          .removeClass("active-block");
        $(outerBox)
          .find(".accordion")
          .children(".acc-content")
          .slideUp(300);
        target.addClass("active-block");
        $(this)
          .next(".acc-content")
          .slideDown(300);
      }
    });
  }

  //Tabs Box
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function(e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab animated fadeIn");
        $(target).fadeIn(0);
        $(target).addClass("active-tab animated fadeIn");
      }
    });
  }

  // //Contact Form Validation
  // if($('#contact-form').length){
  // 	$('#contact-form').validate({
  // 		rules: {
  // 			firstname: {
  // 				required: true
  // 			},
  // 			lastname: {
  // 				required: true
  // 			},
  // 			email: {
  // 				required: true,
  // 				email: true
  // 			},
  // 			phone: {
  // 				required: true
  // 			},
  // 			message: {
  // 				required: true
  // 			}
  // 		}
  // 	});
  // }

  // Scroll to a Specific Div
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function() {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top
        },
        1500
      );
    });
  }

  // Elements Animation
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function() {
    headerStyle();
  });

  /* ==========================================================================
   When window is resizing, do
   ========================================================================== */

  $(window).on("resize", function() {
    fixThumbWidth();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function() {
    handlePreloader();
    enableMasonry();
    sortableMasonry();
  });
})(window.jQuery);
