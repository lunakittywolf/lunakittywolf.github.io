animateMusicPopup = function(){
    $("#music-popup").css("transform","translateY(0px)");
}

playSong = async function(){
    song = document.getElementById("song");
    song.play().then(() => {
        console.log("Playback started successfully!");
    })
    .catch((error) => {
        console.error("Playback failed:", error.name, error.message);
        $("body").append("<div id='music-popup'>You have autoplay turned off! Click anywhere for music! :3</div>")
        setTimeout(animateMusicPopup,100);
        $('body').on("click", function(){
            $("#music-popup").css("transform","translateY(-100px)")
            setTimeout($("#music-popup").remove,1000);
            song.play();
            $('body').off("click");
    })
  });
}

