$(document).ready(function() {
    $("#top-nav").slicknav({
        label: "Resources For...",
        prependTo: "#mobile-top-nav"
    });
    $("#main-nav").slicknav({
        label: "Main Menu",
        prependTo: "#mobile-main-nav"
    });
    $(".slicknav_menu").css({ background: "transparent" });
});