(function() {
    const menu = document.getElementById("menuID") as HTMLDivElement;
    const openMenu = document.getElementById("openMenuID") as HTMLDivElement;
    const closeMenu = document.getElementById("closeMenuID") as HTMLDivElement;
    const moon = document.getElementById("moonID") as HTMLImageElement;
    const html = document.getElementById("htmlID");

    openMenu.addEventListener("click", function() {
        menu.classList.remove("hidden");
    })

    closeMenu.addEventListener("click", function() {
        menu.classList.add("hidden");
    })


    // add animations to moon changing

    // had an issue with "if (moon.src == "/img/halfmoon.png")"
    // the src attribute of an image element often contains the absolute URL, which includes the domain name, protocol (e.g., http or https), and the path to the image file.
    // Instead of comparing the src attribute with the full URL path, you can use the endsWith method to check if the src ends with a specific image name.
    moon.addEventListener("click", function() {
        if (moon.src.endsWith("halfmoon.png")) {
            // here it checks that src is equal to relative path
            // when src is accessed it returns absolute url of the image, but when you assign new value to it, the browser automatically converts the relative path to an absolute url based on the current pages url.
            moon.src = "/img/fullmoon.png";
            html?.classList.add("dark")
        } else {
            moon.src = "/img/halfmoon.png";
            html?.classList.remove("dark");
        } // lost 40+ mins here btw
    })
})();