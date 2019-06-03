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

//scroll nav bar functions
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
        scrollTop: $(section).offset().top
    });
});

$("#portfolio-btn").on("click", function(e) {
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
        return 50*i;
      }
    });
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
$("#portfolio-btn").on("click", function(e) {
    portTitleAnimate();
    setTimeout(projectAnimate, 900);
});

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
    $(x).html(modalLink);
}

function projectPopulate(y) {
    $(y).html("");
    
}

// Modal Functions

$("#item-1").on("click", function() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var modalDiv = $("<div>");
    var projectTitle = $("<h3>");
    projectTitle.text("LIRI Bot");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("The LIRI Bot is a CLI application that allows the user to call multiple api's via Node.js. The user can access the Spotify, OMDB and bands in town api's through entering specific search arguments. Click on the github link below to learn more!");
     modalDiv.append(aboutProject);

     var br2 = $("<br>");
     modalDiv.append(br2);

    var linkTitle = $("<h4>");
    linkTitle.text("Github");
    modalDiv.append(linkTitle);

    var br3 = $("<br>");
    modalDiv.append(br3);

    var link = $("<a>");
    link.attr("target", "_blank");
    link.attr("href", "https://github.com/jvalentine1/liri-node-app");
    link.html("https://github.com/jvalentine1/liri-node-app");
    modalDiv.append(link);

     $(".modal-text").html(modalDiv);


    span.onclick = function() {
        modal.style.display = "none";
    }
      
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
});
