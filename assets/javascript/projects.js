
//Modal Functions
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

