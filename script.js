document.addEventListener("DOMContentLoaded", function() {

    var aboutLink = document.getElementById("about-link");
    var projectsLink = document.getElementById("projects-link");
    var contactLink = document.getElementById("contact-link");

    var aboutSection = document.getElementById("about-section");
    var projectsSection = document.getElementById("projects-section");
    var contactSection = document.getElementById("contact-section");

    aboutLink.addEventListener("click", function() {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    projectsLink.addEventListener("click", function() {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactLink.addEventListener("click", function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();
            var href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    }
});
