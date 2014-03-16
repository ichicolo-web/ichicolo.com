$(function () {
  $(window).stellar();

  var links = $('nav#side').find('p')
    , earth = $('.earth').find('img')
    , slide = $('.slide')
    , mywindow = $(window)
    , htmlbody = $('html,body')
    , work = $('.slide.works section')
    ;

  work.fadeOut();

  slide.waypoint(function (event, direction) {
    var dataslide = $(this).attr('data-slide');

    if (direction === 'down') {
      $('nav#side p[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
    }

    else {
      $('nav#side p[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
    }

  });

  mywindow.scroll(function () {
    if (mywindow.scrollTop() == 0) {
      $('nav#side p[data-slide="1"]').addClass('active');
      $('nav#side p[data-slide="2"]').removeClass('active');
    }

    $('h2.title').hide();
    $('h2.number').show();
    $('h2.number').text(mywindow.scrollTop());

    setTimeout(function () {
      $('h2.number').hide();
      $('h2.title').show();
    }
    , 300);
    
    if (mywindow.scrollTop() > 450) {
      $('.slide.top .container section.main').fadeOut('fast');
    }

    else {
      $('.slide.top .container section.main').fadeIn('fast');
    }

    if (mywindow.scrollTop() > 500) {
      setTimeout(function () {
        $('.slide.members h3').animate(
          {
            marginLeft: '10%'
          },
          {
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        );
      }, 1800);

      $('.slide.members .ishikawa').fadeIn('fast').animate(
        {
          marginTop: '0'
        },
        {
          duration: 3000,
          easing: 'easeOutBounce',
        }
      );

      $('.slide.members .inoue').fadeIn('fast').animate(
        {
          marginTop: '0'
        },
        {
          duration: 2500,
          easing: 'easeOutBounce',
        }
      );

      setTimeout(function () {
        $('.slide.members .ishikawa ul').fadeIn('fast').animate(
          {
            margin: 0
          },
          {
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        );
      }, 3500);

      setTimeout(function () {
        $('.slide.members .inoue ul').fadeIn('fast').animate(
          {
            margin: 0
          },
          {
            duration: 1000,
            easing: 'easeInOutQuad',
          }
        );
      }, 3500);
    }

    if (mywindow.scrollTop() > 1700) {
      work.eq(0).fadeIn('slow');
    }
    if (mywindow.scrollTop() > 2300) {
      work.eq(1).fadeIn('slow');
    }
    if (mywindow.scrollTop() > 2900) {
      work.eq(2).fadeIn('slow');
    }
    if (mywindow.scrollTop() > 3500) {
      work.eq(3).fadeIn('slow');
    }
    if (mywindow.scrollTop() > 4100) {
      work.eq(4).fadeIn('slow');
    }
    if (mywindow.scrollTop() > 4700) {
      work.eq(5).fadeIn('slow');
    }
  });

  function goToByScroll(dataslide) {
    htmlbody.animate({
      scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
    }, 2000, 'easeInOutQuint');
  }

  links.click(function (e) {
    e.preventDefault();
    var dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });
 
  earth.click(function (e) {
    e.preventDefault();
    var dataslide = $(this).attr('data-slide');
    goToByScroll(dataslide);
  });
});

$(function () {
  var earthanimation = function () {
    var earth = $('.earth');
    
    earth.animate(
      {
        bottom: '20px'
      },
      {
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function () {
          earth.animate(
            {
              bottom: '0'
            },
            {
              duration: 1500,
              easing: 'easeInOutQuad',
            }
          );
          earthanimation();
        }
      }
    );
  };

  earthanimation();
});
