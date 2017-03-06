$(document).ready( function () {
    $(".img").on("mouseenter", function () {
//        $(".likes").css("display", "block");
        $(this).closest(this).find(".likes").css("display", "block");
    })
    
    $(".img").on("mouseleave", function () {
        $(this).closest(this).find(".likes").css("display", "none");
    })
    
//     $(".img").on("mouseenter", function () {
////        $(".likes").removeClass("showLikes"); 
//        $(this).closest(this).find(".likes").addClass("showLikes");
//    })
    
})