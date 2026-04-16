$(".title").on("click",function(){
    let id = "#" + $(this).parent().attr("id") + "-content"
    $(".content").removeClass("content-expand")
    $(id).addClass("content-expand")
})

playSong();
changeName();
setInterval(changeName, 1500)