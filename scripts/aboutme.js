$(".title").on("click",function(){
    let id = "#" + $(this).parent().attr("id") + "-content"
    $(".content").removeClass("content-expand")
    $(id).addClass("content-expand")
})

playSong();
changeName();
setInterval(changeName, 1500)

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    $(".section").css("width","90%")
}

$("#message-link").on("click",function(){
    window.location.href = "contact-me.html";
})

$("#star").on("click",function(){
    window.location.href = "secret-page.html";
})

$("#why-names").on("click",function(){
    setTimeout(function(){
        $("#why-names").off("click");
        $("#why-names").on("click",function(){
            $("#background").fadeOut(2000);
            $("#background-2").fadeOut(2000);
            $("#star").remove();
            $("#song").html("<source src='music/ConcreteCircle.mp3' type='audio/ogg'>")
            $(".content").removeClass("content-expand")
            $("#why-names-title").css("color","white")
            song.load();
            playSong();
            $('head').append('<link rel="stylesheet" type="text/css" href="styles/aboutmyshadow.css">')
            $('head').append('<script defer src="scripts/aboutmyshadow.js"></script>')
            $("body").load("aboutmyshadow.html")

        })
        $("#why-names-title").css("transition","2000ms");
        $("#why-names-title").css("color","red");
    },2000)

})