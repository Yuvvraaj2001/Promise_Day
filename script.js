$(document).ready(function () {
    $(".heart").on("click", function () {
        if ($(".message").is(":visible")) {
            $(".message").fadeOut(500);
            $(".heart").css("top", "40%");
        } else {
            $(".message").fadeIn(500);
            $(".heart").css("top", "85%");
        }
    });
});
