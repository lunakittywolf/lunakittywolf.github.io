$(".title").on("click",function(){
    let id = "#" + $(this).parent().attr("id") + "-content"
    $(".content").removeClass("content-expand")
    $(id).addClass("content-expand")
})

playSong();
changeName();
setInterval(changeName, 1500)

isMobile = function(){
    return (window.matchMedia("(any-hover:none)").matches) 
};
if (isMobile()) {
    $(".section").css("width","90%")
}