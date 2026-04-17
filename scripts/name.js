let myName = function(x){
    if(x==0){
        return "Mikey"
    }
    if(x==1){
        return "Melody"
    }
    if(x==2){
        return "KittyWolf"
    }
    if(x==3){
        return "Phoenix Steve"
    }
    if(x==4){
        return "Marshmallow"
    }
    if(x==5){
        return "Luna"
    }
}
let currentName = 0;


let numberParse = function(x){
    if(currentName>5){
        currentName=0;
    }
    if(x<6){
        return x;
    }else{
        return x-6;
    }
}

let changeName = function(){
        $(".myFont").removeClass(myName(numberParse(currentName)).replaceAll(" ",""))
        $(".myName").removeClass(myName(numberParse(currentName)).replaceAll(" ",""))
        currentName++;
        $(".myName").text(myName(numberParse(currentName)))
        $(".myName").addClass(myName(numberParse(currentName)).replaceAll(" ",""))
        $(".myFont").addClass(myName(numberParse(currentName)).replaceAll(" ",""))
        document.documentElement.style.setProperty('--Color', `var(--${myName(numberParse(currentName)).replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color2', `var(--${myName(numberParse(currentName+1)).replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color3', `var(--${myName(numberParse(currentName+2)).replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color4', `var(--${myName(numberParse(currentName+3)).replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color5', `var(--${myName(numberParse(currentName+4)).replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color6', `var(--${myName(numberParse(currentName+5)).replaceAll(" ","")})`);
}