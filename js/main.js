function zmianaPrzycisku(x){
    x.classList.toggle("zmiana");
    var mojeMenu = document.getElementById("menu");
    if (mojeMenu.style.display === "block") {
        mojeMenu.style.display = "none";
    } else {
        mojeMenu.style.display = "block"
    }
}

function submenu(x){
    x.classList.toggle("sub-menu");
    var podmenu = document.getElementById("sub-menu");
    if (podmenu.style.display === "block") {
        podmenu.style.display = "none";
    } else {
        podmenu.style.display = "block";
    }
}