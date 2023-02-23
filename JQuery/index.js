$("h1").click(function () {
    $("h1").css("color", "purple");
});

// for (var i = 0; i <5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });

// }

$("button").click(function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

$("h1").on("mouseover", function (e) {
    $("h1").css("color", "purple");
});