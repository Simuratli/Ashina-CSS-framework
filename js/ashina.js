$(".hamburger").click(function() {
    $(".collapse").toggle("slow", function() {
        // Animation complete.
    });
});