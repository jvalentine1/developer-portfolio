//Modal Functions

// ========== project 1 ==========
$("#item-1").on("click", function() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var modalDiv = $("<div>");
    var projectTitle = $("<h3>");
    projectTitle.text("React Click Game");
    projectTitle.addClass("title-decorate");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("This point and click game is built in React, and utilizes stateful and stateless components to make an enjoyable memory challenge for the user. Click the links below to see the deployed version and view the README and code!");
     modalDiv.append(aboutProject);

     var br2 = $("<br>");
     modalDiv.append(br2);

    var linkTitle = $("<h4>");
    linkTitle.text("Heroku:");
    modalDiv.append(linkTitle);

    var br3 = $("<br>");
    modalDiv.append(br3);

    var link = $("<a>");
    link.attr("target", "_blank");
    link.attr("href", "https://jvalentine1.github.io/react-game/");
    link.html("https://jvalentine1.github.io/react-game/");
    modalDiv.append(link);

    var br4 = $("<br>");
    modalDiv.append(br4);

    var linkTitle2 = $("<h4>");
    linkTitle2.text("Github:");
    linkTitle2.addClass("link-pad");
    modalDiv.append(linkTitle2);

    var br5 = $("<br>");
    modalDiv.append(br5);

    var link2 = $("<a>");
    link2.attr("target", "_blank");
    link2.attr("href", "https://github.com/jvalentine1/react-game");
    link2.html("https://github.com/jvalentine1/react-game");
    modalDiv.append(link2);

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

// ========== project 2 ==========
$("#item-2").on("click", function() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var modalDiv = $("<div>");
    var projectTitle = $("<h3>");
    projectTitle.text("Friend Finder App");
    projectTitle.addClass("title-decorate");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("The Friend Finder App is a Heroku deployed application that takes in user information and then searches the stored data of other users for the best match. Click on the github links below to view the Read Me, code. Click the Heroku link to see the depoloyed version.");
     modalDiv.append(aboutProject);

     var br2 = $("<br>");
     modalDiv.append(br2);

    var linkTitle = $("<h4>");
    linkTitle.text("Heroku:");
    modalDiv.append(linkTitle);

    var br3 = $("<br>");
    modalDiv.append(br3);

    var link = $("<a>");
    link.attr("target", "_blank");
    link.attr("href", "https://friend-finder-jv.herokuapp.com/");
    link.html("https://friend-finder-jv.herokuapp.com/");
    modalDiv.append(link);

    var br4 = $("<br>");
    modalDiv.append(br4);

    var linkTitle2 = $("<h4>");
    linkTitle2.text("Github:");
    linkTitle2.addClass("link-pad");
    modalDiv.append(linkTitle2);

    var br5 = $("<br>");
    modalDiv.append(br5);

    var link2 = $("<a>");
    link2.attr("target", "_blank");
    link2.attr("href", "https://github.com/jvalentine1/friend-finder");
    link2.html("https://github.com/jvalentine1/friend-finder");
    modalDiv.append(link2);

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

// =========== project 3 ===========
$("#item-3").on("click", function() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var modalDiv = $("<div>");
    var projectTitle = $("<h3>");
    projectTitle.text("News Scrape App");
    projectTitle.addClass("title-decorate");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("News Scrape is an application that utilizes Cheerio, Mongo, and Bootstrap to scrape articles from USA Today, and then, store and display them for the user. It also allows users to comment on articles and delete them from their network.  Click on the github links below to view the Read Me, code. Click the Heroku link to see the depoloyed version.");
     modalDiv.append(aboutProject);

     var br2 = $("<br>");
     modalDiv.append(br2);

    var linkTitle = $("<h4>");
    linkTitle.text("Heroku:");
    modalDiv.append(linkTitle);

    var br3 = $("<br>");
    modalDiv.append(br3);

    var link = $("<a>");
    link.attr("target", "_blank");
    link.attr("href", "https://news-scrape-jv.herokuapp.com/");
    link.html("https://news-scrape-jv.herokuapp.com/");
    modalDiv.append(link);

    var br4 = $("<br>");
    modalDiv.append(br4);

    var linkTitle2 = $("<h4>");
    linkTitle2.text("Github:");
    linkTitle2.addClass("link-pad");
    modalDiv.append(linkTitle2);

    var br5 = $("<br>");
    modalDiv.append(br5);

    var link2 = $("<a>");
    link2.attr("target", "_blank");
    link2.attr("href", "https://github.com/jvalentine1/news-scrape");
    link2.html("https://github.com/jvalentine1/news-scrape");
    modalDiv.append(link2);

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

// project 4
$("#item-4").on("click", function() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var modalDiv = $("<div>");
    var projectTitle = $("<h3>");
    projectTitle.text("LIRI Bot");
    projectTitle.addClass("title-decorate");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("The LIRI Bot is a CLI application that allows the user to call multiple api's via Node.js. The user can access the Spotify, OMDB and bands in town api's through entering specific search arguments. Click on the github link below to view the Read Me and code.");
     modalDiv.append(aboutProject);

     var br2 = $("<br>");
     modalDiv.append(br2);

    var linkTitle = $("<h4>");
    linkTitle.text("Github:");
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

//project 5
$("#item-5").on("click", function() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var modalDiv = $("<div>");
    var projectTitle = $("<h3>");
    projectTitle.addClass("title-decorate");
    projectTitle.text("Giftastic");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("Giftastic is a front-end app that uses the giphy api to generate gif's for the user at the click of a button. It also allows te user to search for a new movie and append it to the list that is populated on load. Click the links below to see the deployed version and view the README and code.");
     modalDiv.append(aboutProject);

     var br2 = $("<br>");
     modalDiv.append(br2);

    var linkTitle = $("<h4>");
    linkTitle.text("Deployed:");
    modalDiv.append(linkTitle);

    var br3 = $("<br>");
    modalDiv.append(br3);

    var link = $("<a>");
    link.attr("target", "_blank");
    link.attr("href", "https://jvalentine1.github.io/GifTastic/");
    link.html("https://jvalentine1.github.io/GifTastic/");
    modalDiv.append(link);

    

    var linkTitle2 = $("<h4>");
    linkTitle2.text("Github:");
    linkTitle2.addClass("link-pad");
    modalDiv.append(linkTitle2);

    var br5 = $("<br>");
    modalDiv.append(br5);

    var link2 = $("<a>");
    link2.attr("target", "_blank");
    link2.attr("href", "https://github.com/jvalentine1/GifTastic");
    link2.html("https://github.com/jvalentine1/GifTastic");
    modalDiv.append(link2);

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

//project 6
$("#item-6").on("click", function() {

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    var modalDiv = $("<div>");
    var projectTitle = $("<h3>");
    projectTitle.text("Mt. Everest Trivia");
    projectTitle.addClass("title-decorate");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("Mt. Everest Trivia is a game that tests your knowledge of Mt. Everest's history. Click the github links below to view the Read Me, code, and deployed version!");
     modalDiv.append(aboutProject);

     var br2 = $("<br>");
     modalDiv.append(br2);

    var linkTitle = $("<h4>");
    linkTitle.text("Deployed:");
    modalDiv.append(linkTitle);

    var br3 = $("<br>");
    modalDiv.append(br3);

    var link = $("<a>");
    link.attr("target", "_blank");
    link.attr("href", "https://jvalentine1.github.io/TriviaGame/");
    link.html("https://jvalentine1.github.io/TriviaGame/");
    modalDiv.append(link);

    

    var linkTitle2 = $("<h4>");
    linkTitle2.text("Github:");
    linkTitle2.addClass("link-pad");
    modalDiv.append(linkTitle2);

    var br5 = $("<br>");
    modalDiv.append(br5);

    var link2 = $("<a>");
    link2.attr("target", "_blank");
    link2.attr("href", "https://github.com/jvalentine1/TriviaGame");
    link2.html("https://github.com/jvalentine1/TriviaGame");
    modalDiv.append(link2);

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

