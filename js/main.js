function zmianaPrzycisku(x){
    x.classList.toggle("zmiana");
    var mojeMenu = document.getElementById("menu");
    if (mojeMenu.style.display === "block") {
        mojeMenu.style.display = "none";
    } else {
        mojeMenu.style.display = "block"
    }
}