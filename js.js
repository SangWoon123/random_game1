const numberForm=document.querySelector("#guessNumber");
const numberFirtsInput=document.querySelector("#firstNumber");
const numberSecondInput=document.querySelector("#secondNumber");

const result=document.querySelector("#result");
const winAndLost=document.querySelector("#winAndLost");


function handleNumber(event){
    event.preventDefault();
    const first=numberFirtsInput.value;
    const second=parseInt(numberSecondInput.value);
    const random=Math.ceil(Math.random()*first);
    result.innerHTML=`You chose: ${second}, the machine chose ${random}.`;
    if(second===random){
        winAndLost.innerHTML="You won!";
    }else{
        winAndLost.innerHTML="You lost!";
    }
}


numberForm.addEventListener("submit",handleNumber);
