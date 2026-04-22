WHY = function(){
    let questions = [
        "Why so many names?",
        "Why Melody? You don't really do anything with music anymore...",
        "Why Mikey? Aren't you a girl now?",
        "Why Phoenix Steve? Aren't the Steves like... dead?",
        "Why Luna?",
        "Why Marshmallow? Isn't that a pet name? Should you really be using that here?",
        "Why are you a girl?",
        "But like, why are you <i>you</i> anyway?",
        "But what's the utility in identity?",
        "If it's causing you so much pain to be you, shouldn't you stop?",
        "Who even are you anyway?",
        "No seriously, why are you a girl?",
        "Why?",
        "Is it even acceptable for you to be a girl when you still fetishize the condition of being a woman?",
        "Why?",
        "Is it even worth being a girl when society clearly doesn't want you?",
        "How are you going to justify your existence to people who don't get it?",
        "Why are you here?",
        "How are you going to justify your existence to yourself when you have doubts?",
        "Why are you you?",
        "If gender is fake, why even be a girl?",
        "Why put up with it if you hate being objectified?",
        "Why not just be nonbinary?",
        "Why not just accept what you were given?",
        "Why do you feel this way?",
        "Are those feelings real, though?",
        "Is this version of you real though?",
        "But why?",
        "Why make this website?",
        "Why?",
        "Why make this page?",
        "Why can't you just be yourself?",
        "Why do you need to express yourself in this way?",
        "Why do you want to do this?",
        "Why?",
        "Why should I trust you?",
        "How do I know I won't just give up this time?",
        "How do I know I won't wake up tomorrow feeling the opposite way?",
        "Why?",
        "If I can't believe that I'll stay this way tomorrow, why should I even commit to it today?",
        "What's the point of doing anything if I never feel like the same person?",
        "Why did you even bother typing up this many questions?",
        "Why would anyone even read all of these?",
        "Why?",
        "Why?",
        "Why?"
    ]
    for(let x=0; x<questions.length; x++){
        seconds = x*(800-(x*10));
        console.log(seconds);
        setTimeout(function(){
            if(x==questions.length-1){
                
            }
            $("body").append(`<p class='question' style='top:${Math.random()*$("body").height()}px; left:${Math.random()*$("body").width()-100}px'>${questions[x]}</p>`)
        },seconds)
    }
    question = 0;
    setTimeout(function(){
        setInterval(function(){
            if(question==questions.length){
                question=0;
            }
            $("body").append(`<p class='question' style='top:${Math.random()*$("body").height()}px; left:${Math.random()*$("body").width()-100}px'>${questions[question]}</p>`)
            question++;
        },80)   
    },15000) 
}

$("#why-names").on("click",function(){
    WHY();
})