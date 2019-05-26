var name = "Jacob Valentine";
var fullStack = "Full-Stack ";
var webDev = "Developer";
var count = 0;
var nameElement = $("<h1>");


//
function openPage() {
    setInterval(nameRender, 50);
}

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

    function buttonFade() {
        $(".open-btn-host").removeClass("display-none");
        $(".open-btn-host").addClass("call-fade");
    }

setTimeout(buttonFade, 1000);

//scroll nav bar functions
$(".open-btn-host").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
    animateTag();
});

$(".nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

//sticky nav bar function
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  //icon text animation

function animateTag() {

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
        return 70*i;
      }
    });
};