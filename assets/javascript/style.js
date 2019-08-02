//Global Variables
var name = "Jacob Valentine";
var fullStack = "Full-Stack ";
var webDev = "Developer";
var count = 0;
var nameElement = $("<h1>");


//open page function
function openPage() {
    setInterval(nameRender, 50);
}

//name populate function
function nameRender() {

    nameElement.append(name[count]);
    $(".name-text").append(nameElement);
    count++;
    if (count === 13) {
        clearInterval(nameRender);
    }
}

function landingAnimate() {
    $(".landing").attr("id", "landing-animate");
}

openPage();
setTimeout(landingAnimate, 1500);

//job title animation function
$('.ml9 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: function(el, i) {
        return 45 * (i+1)
      }
    }).add({
      targets: '.ml9',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

// button fade in function
    function buttonFade() {
        $(".open-btn-host").removeClass("display-none");
        $(".open-btn-host").addClass("call-fade");
    }

setTimeout(buttonFade, 1000);

//scroll home page function
$(".open-btn-host").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
    animateTag();
    imgRotate();
});

//nav bar scroll function

$("#about-btn").on("click", function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scroll: $(section).offset().top
    });
});

$("#portfolio-btn").on("click", function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('.about').position().top){
        animateTag();
        imgRotate();
    }
})



//Portfolio Nav on scroll drop down
$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('.portfolio').position().top){
        navDropDown();
    }
})

function navDropDown() {
    $(".animated-nav").animate({
        height:"57px"
    }, 400);

    $(".animated-attr").removeClass("vis-hide");

    portTitleAnimate();
    setTimeout(projectAnimate, 900);
}

  //icon text animation
  var executed = false;

var animateTag = function() {
        if(!executed) {
            executed = true;

            $(".text-add").removeClass("hide");

            $('.text-add').each(function(){
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            });
    
            anime.timeline()
                .add({
                targets: '.text-add .letter',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 250,
                delay: function(el, i) {
                    return 50*i;
                }
            });           
        }
};

//image grow animation
function imgRotate() {
    $("#icon-1").animate({
        height:"5em",
        width:"5em"
    }, 1100);

    $("#icon-2").animate({
        height:"5em",
        width:"5em"
    }, 2100);

    $("#icon-3").animate({
        height:"3em",
        width:"4em"
    }, 2900);

    $("#my-image").animate({
        height:"17em",
        width:"17em"
    }, 1100);

    setTimeout(bioAnimate, 1000);
    setTimeout(linkAnimate, 1000);
}

//text and link fade in function
function bioAnimate() {
    $("#bio").removeClass("hide");
    $("#bio").addClass("call-fade");
}

function linkAnimate() {
    $("#gitHub-link").removeClass("hide");
    $("#gitHub-link").addClass("text-fade");

    $("#linkedIn-link").removeClass("hide");
    $("#linkedIn-link").addClass("text-fade");
}

//portfolio title animate

function portTitleAnimate() {

    $(".letters").removeClass("hide");

$('.my-projects .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    
    .add({
      targets: '.my-projects .letter',
      scale: [0, 1],
      duration: 1800,
      elasticity: 600,
      delay: function(el, i) {
        return 45 * (i+1)
      }
    });
};

//portfolio project image animate
function projectAnimate() {
    $(".pic-size").animate({
        height:"10em",
        width:"10em"
    }, 800);
}

// project hover functions
var modalLink = '<h3 class="learnMore">Learn More</h3>';

$("#item-1").hover(function() {
        learnMore(this);
    }, function() {
        projectPopulate(this);
    });

    $("#item-2").hover(function() {
        learnMore(this);
    }, function() {
        projectPopulate(this);
    });

    $("#item-3").hover(function() {
        learnMore(this);
    }, function() {
        projectPopulate(this);
    });

    $("#item-4").hover(function() {
        learnMore(this);
    }, function() {
        projectPopulate(this);
    });

    $("#item-5").hover(function() {
        learnMore(this);
    }, function() {
        projectPopulate(this);
    });

    $("#item-6").hover(function() {
        learnMore(this);
    }, function() {
        projectPopulate(this);
    });

function learnMore(x) {
    $(x).addClass("learnMore-img");
    $(x).html(modalLink);
}

function projectPopulate(y) {
    $(y).removeClass("learnMore-img");
    $(y).html("");
    
}


