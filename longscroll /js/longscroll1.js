$(document).ready(function() {

    //create system variables
    //var fromTop = 0;

    // start doing stuff when i am scrolling
    $(window).scroll(function(){//start of scroll

      //update variable with the number of pixels scrolled
      var fromTop = $(window).scrollTop();
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 10000;
      var keyframes = findKeyframesRule(anim);

      //console.log(fromTop);


      if(y_scroll_pos > scroll_pos_test) {
        document.getElementByClass("person").animate([
          // keyframes
          {opacity: 1;
          }

          {opacity: 0;
            -webkit-transform: translate3d(0, -900, 0);
            transform: translate3d(0, -900, 0);
          }
        ], {
          // timing options
          duration: 3,
          iterations: 1
        });

      //console.log(fromTop);


      // ||||||||||| ASTEROIDS SECTION |||||||||||||||||||||||||
      $("#asteroid").css({
                    "left": (-800 + fromTop)* 0.409 + "px"
                     }).text("px:"+ fromTop);

      // ||||||||||| SPACESHIP SECTION |||||||||||||||||||||||||

      if(fromTop >= 3900){
        $("#spaceship").css({
                      "display":"none"
                      });
        } else {
      $("#spaceship").css({
                    "top" : fromTop * 1.1 +"px",
                    "display":"block"
                    });
        }



      if(fromTop >= 4400){
        $("#spaceship").text("You scrolled " + fromTop +"px");
        $("#spaceship").css({
                        "top" : fromTop * 1 +"px",
                        "display":"initial"
                      });
        }

    });//end of the scroll function

  }); //end of document ready function
