let myName = [
    "Mikey",
    "Melody",
    "KittyWolf",
    "Phoenix Steve",
    "Marshmallow",
    "Luna"  
];
let currentName = 0;


let numberParse = function(x){
    if(currentName>myName.length-1){
        currentName=0;
    }
    if(x<myName.length){
        return x;
    }else{
        return x-myName.length;
    }
}

let changeName = function(){
        $(".myFont").removeClass(myName[numberParse(currentName)].replaceAll(" ",""))
        $(".myName").removeClass(myName[numberParse(currentName)].replaceAll(" ",""))
        currentName++;
        let name = myName[numberParse(currentName)];
        if(name=="Question"){
            name="???";
        }
        $(".myName").text(name)
        $(".myName").addClass(myName[numberParse(currentName)].replaceAll(" ",""))
        $(".myFont").addClass(myName[numberParse(currentName)].replaceAll(" ",""))
        document.documentElement.style.setProperty('--Color', `var(--${myName[numberParse(currentName)].replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color2', `var(--${myName[numberParse(currentName+1)].replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color3', `var(--${myName[numberParse(currentName+2)].replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color4', `var(--${myName[numberParse(currentName+3)].replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color5', `var(--${myName[numberParse(currentName+4)].replaceAll(" ","")})`);
        document.documentElement.style.setProperty('--Color6', `var(--${myName[numberParse(currentName+5)].replaceAll(" ","")})`);
}

if(localStorage.getItem("???")){
    myName.push("Question")
}