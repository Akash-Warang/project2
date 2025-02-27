const btn=document.querySelector(".btn");
const btns=document.querySelector(".btns-container");
const screen=document.querySelector("#input");
const output=document.querySelector("#output");
console.dir(screen);

let num1="";
let operator="";
let num2="";
let res=0;
let isNum2=false;
let isOn=false;

btns.addEventListener("click", (event)=>{
    let btnVal=event.target.innerText;
    //check calci is on or off
    if(btnVal == "on"){
        event.target.innerText="off";
        isOn=true;
    }
    else if(btnVal == "off"){
        event.target.innerText="on";
        isOn=false;
    }
    //calci is on then run this one
    if(isOn){
        if(event.target.classList.contains("btn")){
            if(!isNaN(btnVal)){
                if(!isNum2){
                    num1 += btnVal;
                }else{
                    num2 += btnVal;
                }
            }
            else if(["+","-","*","/"].includes(btnVal)){
                operator = btnVal;
                isNum2=true;
            }
            else if (btnVal == "="){
                viewResult();
            }
            else if(btnVal == "Ac"){
                clearAll();
            }
            else if(btnVal == "<-"){
                backSpace();
            }
        }
        updateScreen();
    }
    
})
function backSpace(){
    if (num2) {
        num2 = num2.slice(0, -1);
    } else if (operator) {
        operator = "";
        isSecondNum = false;
    } else {
        num1 = num1.slice(0, -1);
    }
    updateScreen();
}
function clearAll(){
    num1="";
    operator="";
    num2="";
    res=0;
    isNum2=false;
    output.innerText= " = ";
}
function updateScreen(){
    screen.value=num1 + operator + num2;
}
function viewResult(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2)
    switch(operator){
        case "+":res=num1 + num2;break;
        case "-":res=num1 - num2;break;
        case "*":res=num1 * num2;break;
        case "/":res=(num1!=0||num2!=0)?num1/num2:"Error";break;
    }
    showRes();
}
function showRes(){
    output.innerText= "Ans= " + res ; 
}