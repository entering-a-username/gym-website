(function () {
    var menu = document.getElementById("menuID");
    var openMenu = document.getElementById("openMenuID");
    var closeMenu = document.getElementById("closeMenuID");
    var moon = document.getElementById("moonID");
    openMenu.addEventListener("click", function () {
        menu.classList.remove("hidden");
    });
    closeMenu.addEventListener("click", function () {
        menu.classList.add("hidden");
    });
    // change moons on click
    moon.addEventListener("click", function () {
        if (moon) {
            moon.src = moon.src.replace('/img/halfmoon.png', '/img/fullmoon.png');
        }
    });
})();
