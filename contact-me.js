playSong();
let changeTitle = function(){
    document.title = "Contact " + myName(numberParse(currentName))
}
changeName();

let changeNameStuff = function(){
    changeName();
    changeTitle();
}
setInterval(changeNameStuff, 1500)

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    $("input").css("width","150px")
}