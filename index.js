const menu = () => {
    const mobileNav = document.getElementById("mobile-nav");

    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block"
    }
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none"
    }

}