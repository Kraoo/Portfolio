document.addEventListener("DOMContentLoaded", function() {
    var languageSelect = document.getElementById("language-select");
    var itOption = document.getElementById("it-option");

    languageSelect.addEventListener("change", function() {
        if (languageSelect.value === "it") {
            window.location.href = "./indexIT.html"; 
        } else if (languageSelect.value === "en") {
            window.location.href = "./index.html"; 
        }
    });
});
