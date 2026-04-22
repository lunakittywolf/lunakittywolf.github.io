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
            $("#why-names").off("click");
            $("#background").fadeOut(2000);
            $("#background-2").fadeOut(2000);
            $("#star").remove();
            $("#song").html("<source src='music/ConcreteCircle.mp3' type='audio/ogg'>")
            $(".content").removeClass("content-expand")
            $("#why-names-title").css("color","white")
            song.load();
            playSong();
            setTimeout(function(){
                $("#who-is-she-content").html(
                `<p>Sometimes. I don't know.</p>
                <p>Sometimes, I doubt that what little I do know about myself is even real.</p>
                <p>Nothing Is True. Everything Is Permitted.</p>
                <p>You'd think that would mean we have more control over who we are and who we become. But it doesn't really work that way.</span></p>
                <p>I try to love myself. And sometimes I succeed, even. But othertimes... I don't know.</p>
                <p>I didn't ask to be trans.</p>
                <p>I didn't ask to be a girl.</p>
                <p>I resent my existence sometimes.</p>`
            )
            $("#what-is-this-content").html(
                `<p>The bitter cries of something a little more real within me?</p>
                <p>I don't know to be honest. I didn't originally intend to have this page transform like this. But something inside of me just couldn't allow for <i>my</i> website to not represent my resentment and anguish somewhere.</p> 
                <p>I lied about all of the assets on this site being made by me by the way. The song playing right now is from Milk Outside A Bag of Milk Outside A Bag of Milk...</p>
                <p>But if you didn't find this version of this page then it wouldn'tve been a lie. So let's just pretend you didn't find this page, okay? Then it can stay the truth.</p>
                `
            )
            $("#why-names-content").html(
                `<p>Why so many names?</p>`
            )
            $("#who-am-I-content").html(
                `<p>Pft. Most likely you're just a monkey. Don't worry about it too much.</p>`
            )
            $('head').append('<link rel="stylesheet" type="text/css" href="styles/aboutmyshadow.css">')
            $("#why-names").on("click",function(){
                WHY();
            })
            },1000)
        })
        $("#why-names-title").css("transition","2000ms");
        $("#why-names-title").css("color","red");
    },2000)

})