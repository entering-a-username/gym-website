(function() {
    const menu = document.getElementById("menuID") as HTMLDivElement;
    const openMenu = document.getElementById("openMenuID") as HTMLDivElement;
    const closeMenu = document.getElementById("closeMenuID") as HTMLDivElement;
    const moon = document.getElementById("moonID") as HTMLImageElement;

    openMenu.addEventListener("click", function() {
        menu.classList.remove("hidden");
    })

    closeMenu.addEventListener("click", function() {
        menu.classList.add("hidden");
    })


    // change moons on click
    moon.addEventListener("click", function() {
        if (moon) {
            moon.src = moon.src.replace('/img/halfmoon.png', '/img/fullmoon.png')
        }

    })



})();