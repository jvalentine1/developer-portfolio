//Modal Functions

//project 1
$("#item-1").on("click", function() {

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
    projectTitle.text("Mood Quotes App");
    modalDiv.append(projectTitle);

     var br1 = $("<br>");
     modalDiv.append(br1);

     var aboutProject = $("<p>");
     aboutProject.addClass("project-description");
     aboutProject.text("The Mood Quotes App utilizes four API's to provide the user with a fun and useful service. Upon email entry, the client will enter their location and be provided with the weather and an inspirational quote, they can also get a fact about the day and try some trivia. Click the github links below to view the Read Me, code, and deployed version!");
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
    link.attr("href", "https://jvalentine1.github.io/project-1-repo/");
    link.html("https://jvalentine1.github.io/project-1-repo/");
    modalDiv.append(link);

    

    var linkTitle2 = $("<h4>");
    linkTitle2.text("Github:");
    linkTitle2.addClass("link-pad");
    modalDiv.append(linkTitle2);

    var br5 = $("<br>");
    modalDiv.append(br5);

    var link2 = $("<a>");
    link2.attr("target", "_blank");
    link2.attr("href", "https://github.com/jvalentine1/project-1-repo");
    link2.html("https://github.com/jvalentine1/project-1-repo");
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

