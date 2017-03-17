$(document).ready(function() {

    //create system variables
    //var fromTop = 0;

    // start doing stuff when i am scrolling
    $(window).scroll(function(){//start of scroll

//trigger animation at certain point
//person going up
if($(window).scrollTop() >= $(document).height() - $(window).height() - 30){
      $(".person").css("-webkit-animation-play-state", "running")

    }
//light appearing
    if($(window).scrollTop() >= $(document).height() - $(window).height() - 50){
          $(".light").css("-webkit-animation-play-state", "running")
//Text box appearing
        }
    if($(window).scrollTop() >= 1010){
          $(".box").css("-webkit-animation-play-state", "running")

            }
    if($(window).scrollTop() >= 2810){
          $(".box1").css("-webkit-animation-play-state", "running")

                }
    if($(window).scrollTop() >= 5510){
    $(".box2").css("-webkit-animation-play-state", "running")

  }

    if($(window).scrollTop() >= 6850){
    $(".box3").css("-webkit-animation-play-state", "running")

                        }
    if($(window).scrollTop() >= 8800){
    $(".box4").css("-webkit-animation-play-state", "running")


    }
    if($(window).scrollTop() >= 8550){
    $(".box5").css("-webkit-animation-play-state", "running")

                        }
    //end of text box
    //update variable with the number of pixels scrolled
    var fromTop = $(window).scrollTop();

    // ||||||||||| ASTEROIDS SECTION |||||||||||||||||||||||||
    $("#asteroid").css({
    "left": (-800 + fromTop)* 2.5 + "px"
    });

      // ||||||||||| SPACESHIP SECTION |||||||||||||||||||||||||
      //Spaceship disappearing
      if(fromTop >= 3150){
        $("#spaceship").css({
                      "display":"none"
                      });
        } else {
      $("#spaceship").css({
                    "top" : (50 + fromTop) * 1.2 +"px",
                    "display":"block"
                    });
        }


      //Spaceship reppearing
      if(fromTop >= 4800){
        $("#spaceship").text("You scrolled " + fromTop +"px");
        $("#spaceship").css({
                        "top" : fromTop * 1 +"px",
                        "display":"initial"
                      });
        }





      // |||||||||| CLOUDS SECTION ||||||||||||||
//Cloud
if(fromTop < 5250){
    $(".cloud").css({
      "top" : (5250 + fromTop) , "display":"none"
    });
}
if(fromTop >= 4850){
  $(".cloud").css({
                  "top" : fromTop * 0.995 +"px",
                  "display":"initial"
                });
  }
  if(fromTop >= 8900){
      $(".cloud").css({
        "top" : (5250 + fromTop) , "display":"none"
      });
  }//End of cloud
  //Cloud1
  if(fromTop < 5250){
      $(".cloud1").css({
        "top" : (5250 + fromTop) , "display":"none"
      });
  }
  if(fromTop >= 4850){
    $(".cloud1").css({
                    "top" : fromTop * 0.989 +"px",
                    "display":"initial"
                  });
    }
    if(fromTop >= 8900){
        $(".cloud1").css({
          "top" : (5250 + fromTop) , "display":"none"
        });
    }//End of cloud1
//Cloud2
    if(fromTop < 5250){
        $(".cloud2").css({
          "top" : (5250 + fromTop) , "display":"none"
        });
    }
    if(fromTop >= 4850){
      $(".cloud2").css({
                      "top" : fromTop * 1.01 +"px",
                      "display":"initial"
                    });
      }
      if(fromTop >= 8900){
          $(".cloud2").css({
            "top" : (5250 + fromTop) , "display":"none"
          });
      }//End of cloud2
//Cloud3
      if(fromTop < 5250){
          $(".cloud3").css({
            "top" : (5250 + fromTop) , "display":"none"
          });
      }
      if(fromTop >= 4850){
        $(".cloud3").css({
                        "top" : fromTop * 1.01 +"px",
                        "display":"initial"
                      });
        }
        if(fromTop >= 8900){
            $(".cloud3").css({
              "top" : (5250 + fromTop) , "display":"none"
            });
        }//End of cloud3

//Bird flying
    $(".bird").css({
                  "left": (-5100 + fromTop) * 0.8 + "px"
                });

    });//end of the scroll function

  }); //end of document ready function
