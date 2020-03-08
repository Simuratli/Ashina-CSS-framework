$(".hamburger").click(function() {
    $(".collapse").toggle("slow", function() {
        // Animation complete.
    });
});

$(".menu-icon").on('click', function() {
    $("nav ul").toggleClass("showing");
})