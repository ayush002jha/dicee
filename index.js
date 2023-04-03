// Generating Random Number
var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomnumber2 = Math.floor(Math.random()*6)+1;
// All the icons
var img1 ="fa-solid fa-dice-one fa-10x";
var img2 ="fa-solid fa-dice-two fa-10x";
var img3 ="fa-solid fa-dice-three fa-10x";
var img4 ="fa-solid fa-dice-four fa-10x";
var img5 ="fa-solid fa-dice-five fa-10x";
var img6 ="fa-solid fa-dice-six fa-10x";
// Code to set the image based on random number generated
function htmlModifier(id,randomnumber){
    switch (randomnumber) {
        case 1:
            document.querySelector(id).setAttribute("class",img1);
            break;
        case 2:
            document.querySelector(id).setAttribute("class",img2);
            break;
        case 3:
            document.querySelector(id).setAttribute("class",img3);
            break;
        case 4:
            document.querySelector(id).setAttribute("class",img4);
            break;
        case 5:
            document.querySelector(id).setAttribute("class",img5);
            break;
        case 6:
            document.querySelector(id).setAttribute("class",img6);
            break;

        default:
            break;
    }
}
// Icons are modified
htmlModifier("#one",randomnumber1);
htmlModifier("#two",randomnumber2);
// Winner is declared
if(randomnumber1===randomnumber2){
    document.querySelector("h1").textContent = "Draw🏳️";
}else if (randomnumber1>randomnumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}else{
    document.querySelector("h1").textContent = "🚩Player 2 Wins!";
}