let changeTitle = function(){
    document.title = myName[numberParse(currentName)] + "'s Splash Page" 
}
changeName();

let changeNameStuff = function(){
    changeName();
    changeTitle();
}
setInterval(changeNameStuff, 1500)

let sillyQuotes = [
    "Did you know you can kinda just do whatever you want? It's fucked up.",
    "Bloop!",
    "Fiction can change the world!",
    "It is ignorance and hope that warms the heart.",
    "TORCHY'S TACOS?!",
    "Additional Aliases: Butterfly Mcgiggles, Otaku Steve, Maiki, Cranon, Namaiki, Charlotte",
    "Everything ends, but I've got 60% left.",
    "Battle Damaged Purgatory Hell-World Princess",
    "I feed upon the unwavering spirit and forge my way through the dark journey!",
    "Push Forward!"
]
let currentQuote = Math.floor(Math.random()*sillyQuotes.length);
let readQuotes = [currentQuote];
$("#silly-quote").text(sillyQuotes[currentQuote])


let switchQuote = function(){
    let random = Math.floor(Math.random() * sillyQuotes.length);
    if(readQuotes.length==sillyQuotes.length){
        readQuotes=[];
    }
    while(readQuotes.includes(random)||currentQuote==random){
        random =  Math.floor(Math.random() * sillyQuotes.length);
    } 
    currentQuote = random;
    readQuotes.push(random)
    $("#silly-quote").text(sillyQuotes[currentQuote]) 
}

$("#silly-quote").on("click",function(){
    switchQuote();
})

$("#play-music").on("click",function(){
    $("#play-music").text(`You're listening to "Dancing Spirit - Redux -", a remake of the first composition I ever created. The original I made sometime in middle school around 2010. This version was made in 2016.`)
    playSong();
})

$("#music-settings").on("click",function(){
    window.location.href = "settings.html";
})

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    $("#welcome-message").html('<span style="height:38px; display:block;" class="myName Melody">Melody</span>')
    $("#welcome-message").css("padding-bottom","10px")
    $("#title-text").css("width","100%")
    $("#title-section").css("width","100%")
}