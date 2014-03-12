$(function() {
  if (typeof window.ichicolo === 'undefined') {
    window.ichicolo = {};
  }

  if (typeof window.ichicolo.index === 'undefined') {
    window.ichicolo.index = {};
  }

  var i = window.ichicolo.index;
  flag = true;

  i.alive = function () {
    var speed = 100;

    intervalId = setInterval(
      function () {
        $('.dot').animate(
          {
            height: '36px'
          },
          {
            duration: speed,
            easing: 'easeInQuart'
          }
        )
        .animate(
          {
            height: '32px'
          },
          {
            duration: speed
          }
        );
      }, 500
    );
  };

  i.alive();

  i.hop = function () {
    var speed = 100,
        random = Math.floor(Math.random() * 20 + 1);

    $('.dot').animate(
      {
        height: 42 + random + 'px'
      },
      {
        duration: speed,
        easing: 'easeInExpo'
      }
    )
    .animate(
      {
        height: '32px'
      },
      {
        duration: speed,
        easing: 'easeInExpo'
      }
    );
  };

  i.firstPhase = function () {

    clearInterval(intervalId);

    if (flag) {
      flag = false;
      $('.dot').animate(
        {
          width: 0,
          height: 0,
          padding: '0 0 0 17px'
        },
        {
          duration: 1300,
          easing: 'easeOutCirc',
          complete: function() {
            $('.dot').clone().appendTo('h5').attr('class', 'dot child');
            $('.dot.parent').css('left', '39%').attr({
              'onmouseover': 'window.ichicolo.index.hop()',
              'onclick': 'window.ichicolo.index.secondPhasePatternA()'
            });
            $('.dot.child').css('left', '60%').attr({
              'onmouseover': 'window.ichicolo.index.hop()',
              'onclick': 'window.ichicolo.index.secondPhasePatternB()'
            });
            $('.dot').animate(
              {
                width: '34px',
                height: '32px',
                padding: 0
              },
              {
                duration: 500,
                easing: 'easeInCirc'
              }
            );
            $(function () {
              i.alive();
              flag = true;
            });
          }
        }
      );
    } else {
      return false;
    }
  };

  i.secondPhasePatternA = function () {

    clearInterval(intervalId);

    if (flag) {
      flag = false;
      $('.dot').animate(
        {
          width: 0,
          height: 0,
          padding: '0 0 0 17px'
        },
        {
          duration: 1300,
          easing: 'easeOutCirc',
          complete: function() {
            $('.dot.child').remove();
            $('.dot.parent').attr('class', 'dot');
            $('.dot').clone().appendTo('h5');
            $('.dot').clone().appendTo('h5');
            for (var i = 0; i < $('.dot').length; i = i + 1) {
              $('.dot').eq(i).attr({
                'class': 'dot d' + i,
                'onclick': 'window.ichicolo.index.thirdPhasePattern()',
                'onmouseover': 'window.ichicolo.index.hop' + '(' + i + ')'
              });
            }
            $('.dot.d1').css({
              'left': '32%',
              'bottom': '45%'
            });
            $('.dot.d2').css({
              'left': '39%',
              'bottom': '45%'
            });
            $('.dot.d3').css({
              'left': '46%',
              'bottom': '45%'
            });
            $('.dot.d4').css({
              'left': '39%',
              'bottom': '30%'
            });
            $('.dot.d5').css({
              'left': '32%',
              'bottom': '15%'
            });
            $('.dot.d6').css({
              'left': '39%',
              'bottom': '15%'
            });
            $('.dot.d7').css({
              'left': '46%',
              'bottom': '15%'
            });
            $('.dot.d8').css({
              'left': '53%',
              'bottom': '45%'
            });
            $('.dot.d9').css({
              'left': '60%',
              'bottom': '45%'
            });
            $('.dot.d10').css({
              'left': '67%',
              'bottom': '45%'
            });
            $('.dot.d11').css({
              'left': '53%',
              'bottom': '30%'
            });
            $('.dot.d12').css({
              'left': '53%',
              'bottom': '15%'
            });
            $('.dot.d13').css({
              'left': '60%',
              'bottom': '15%'
            });
            $('.dot.d14').css({
              'left': '67%',
              'bottom': '15%'
            });
            $('.dot.d4, .dot.d11').animate(
              {
                width: '34px',
                height: '32px',
                padding: 0
              },
              {
                duration: 500,
                easing: 'easeOutCirc',
                complete: function() {
                  $('.d0, .d15').remove();
                }
              }
            );
            setTimeout(function () {
              $('.dot.d5, .dot.d12').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1500);
            setTimeout(function () {
              $('.dot.d6, .dot.d13').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1650);
            setTimeout(function () {
              $('.dot.d7, .dot.d14').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1800);
            setTimeout(function () {
              $('.dot.d1, .dot.d8').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1950);
            setTimeout(function () {
              $('.dot.d2, .dot.d9').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 2100);
            setTimeout(function () {
              $('.dot.d3, .dot.d10').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 2250);
          }
        }
      );
      setTimeout(function () {
        $(function () {
          i.alive();
          flag = true;
        });
      }, 3900);
    } else {
      return false;
    }
  };

  i.secondPhasePatternB = function () {

    clearInterval(intervalId);

    if (flag) {
      flag = false;
      $('.dot').animate(
        {
          width: 0,
          height: 0,
          padding: '0 0 0 17px'
        },
        {
          duration: 1300,
          easing: 'easeOutCirc',
          complete: function() {
            $('.dot.child').remove();
            $('.dot.parent').attr('class', 'dot');
            $('.dot').clone().appendTo('h5');
            $('.dot').clone().appendTo('h5');
            for (var i = 0; i < $('.dot').length; i = i + 1) {
              $('.dot').eq(i).attr({
                'class': 'dot d' + i,
                'onclick': 'window.ichicolo.index.thirdPhasePattern()',
                'onmouseover': 'window.ichicolo.index.hop' + '(' + i + ')'
              });
            }
            $('.dot.d1').css({
              'left': '39%',
              'bottom': '30%'
            });
            $('.dot.d2').css({
              'left': '60%',
              'bottom': '30%'
            });
            $('.dot.d3').css({
              'left': '32%',
              'bottom': '12%'
            });
            $('.dot.d4').css({
              'left': '35%',
              'bottom': '6.5%'
            });
            $('.dot.d5').css({
              'left': '38%',
              'bottom': '3.5%'
            });
            $('.dot.d6').css({
              'left': '41%',
              'bottom': '1.7%'
            });
            $('.dot.d7').css({
              'left': '44%',
              'bottom': '0.9%'
            });
            $('.dot.d8').css({
              'left': '47%',
              'bottom': '0.3%'
            });
            $('.dot.d9').css({
              'left': '50%',
              'bottom': '0'
            });
            $('.dot.d10').css({
              'left': '53%',
              'bottom': '0.3%'
            });
            $('.dot.d11').css({
              'left': '56%',
              'bottom': '0.9%'
            });
            $('.dot.d12').css({
              'left': '59%',
              'bottom': '1.7%'
            });
            $('.dot.d13').css({
              'left': '62%',
              'bottom': '3.5%'
            });
            $('.dot.d14').css({
              'left': '65%',
              'bottom': '6.5%'
            });
            $('.dot.d15').css({
              'left': '68%',
              'bottom': '12%'
            });
            $('.dot.d1, .dot.d2').animate(
              {
                width: '34px',
                height: '32px',
                padding: 0
              },
              {
                duration: 500,
                easing: 'easeOutCirc',
                complete: function() {
                  $('.d0').remove();
                }
              }
            );
            setTimeout(function () {
              $('.dot.d9').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1500);
            setTimeout(function () {
              $('.dot.d8, .dot.d10').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1650);
            setTimeout(function () {
              $('.dot.d7, .dot.d11').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1800);
            setTimeout(function () {
              $('.dot.d6, .dot.d12').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 1950);
            setTimeout(function () {
              $('.dot.d5, .dot.d13').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 2100);
            setTimeout(function () {
              $('.dot.d4, .dot.d14').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 2250);
            setTimeout(function () {
              $('.dot.d3, .dot.d15').animate(
                {
                  width: '34px',
                  height: '32px',
                  padding: 0
                },
                {
                  duration: 500,
                  easing: 'easeOutCirc'
                }
              );
            }, 2400);
          }
        }
      );
      setTimeout(function () {
        $(function () {
          i.alive();
          flag = true;
        });
      }, 3900);
    } else {
      return false;
    }
  };

  i.thirdPhasePattern = function () {

    clearInterval(intervalId);

    if (flag) {
      flag = false;
      $('.dot').animate(
        {
          width: 0,
          height: 0,
          padding: '0 0 0 17px'
        },
        {
          duration: 1300,
          easing: 'easeOutCirc',
          complete: function() {
            i.lastPhase();
          }
        }
      ) 
    }
  };

  i.lastPhase = function () {

    clearInterval(intervalId);

    $('h5').remove();
    $('.circle').css(
      {
        display: 'block'
      }
    ).animate(
      {
        top: '70%'
      },
      {
        duration: 1400,
        easing: 'easeOutBounce'
      }
    ).animate(
      {
        left: '-20%'
      },
      {
        duration: 1800,
        easing: 'easeInOutExpo',
      }
    ); 
    $('.bar').css(
      {
        display: 'block'
      }
    ).animate(
      {
        top: '40%'
      },
      {
        duration: 1400,
        easing: 'easeOutBounce'
      }
    ).animate(
      {
        left: '-20%'
      },
      {
        duration: 1800,
        easing: 'easeInOutExpo',
        complete: function () {
          $('circle').remove();
          $('.bar').remove();
          i.lastPhaseNext();
        }
      }
    ); 
  };

  i.lastPhaseNext = function () {

    var container = $('.container.top')
      , animations = $('.animations')
      ;

    animations.remove();
    container.slideDown('fade');

    clearInterval(intervalId);
    i.start = function () {
      var key = $('.key-visual');
      
      key.animate(
        {
          margin: '-144px 0 0 -124px'
        },
        {
          duration: 1500,
          easing: 'easeInOutQuad',
          complete: function () {
            key.animate(
              {
                margin: '-104px 0 0 -124px'
              },
              {
                duration: 1500,
                easing: 'easeInOutQuad',
              }
            );
            i.start();
          }
        }
      );
    };

    i.start();
    window.location.hash = '#!top';

  };

});
