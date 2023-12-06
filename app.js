const container = document.querySelector(".container");
for (let i = 1; i < 10; i++){  
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);  
    container.innerHTML += `<div class="box" id="${i}">${i}</div>`;
    const boxId = document.getElementById(`${i}`);
    boxId.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const box1 = document.getElementById("1");


const blurry = (event)=>{
    event.target.classList.toggle("blur");
}
box1.addEventListener("click", blurry);


const box2 = document.getElementById("2");
const reduce1 = (event) => {

    event.target.style.scale = event.target.style.scale === "0.4" ? "1" : "0.4";
}
box2.addEventListener("mouseover", reduce1);


const box3 = document.getElementById("3");
const randomizeNum = (event) =>{
    let rnd = Math.floor(Math.random()*100);
    event.target.innerText = rnd;
}
box3.addEventListener("dblclick", randomizeNum);


const box4 = document.getElementById("4");
const visibilityBox = () => {
    box4.style.visibility = "visible";
}
const disappear = (event) =>{
    event.target.style.visibility = "hidden";
    const el = event.target;
    setTimeout(visibilityBox,1000);
}
box4.addEventListener("click", disappear);



const box5 = document.getElementById("5");
const boxes = document.querySelectorAll(".box");

const circle = (event) =>{

    for (event of boxes){
        if (event.style.borderRadius === "50%"){
            event.style.borderRadius = "0%";
        }
        else{
            event.style.borderRadius = "50%";
        }
    }
        
    
}
box5.addEventListener("click", circle);


const box6 = document.getElementById("6");
document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    box6.innerHTML = `x:${x}<br>y:${y}`;
    box6.style.fontSize = "29px";
})


const box7 = document.getElementById("7");
const input7 = document.querySelector(".container2 .seven input");
const button7 = document.querySelector(".container2 .seven button");

const write = () =>{
    box7.innerText = `${input7.value}`;
}
button7.addEventListener("click", write);


const box8 = document.getElementById("8");
const input8= document.querySelector(".eight input");
input8.addEventListener("keydown", (event) =>{
    
})

const calc = document.querySelector(".nine button");
const calculation = () =>{
    const box9 = document.getElementById("9");
    let result = Number(document.getElementById("9").innerText);
    const operator = document.querySelector(".nine select").value;
    const operandus = document.querySelector(".nine input").value;

    switch(operator){
        case "add":
            result += Number(operandus);
            break;
        case "sub":
            result -= Number(operandus);
            break;  
        case "multiply":
            result *= Number(operandus);
            break;
        case "div":
            result /= Number(operandus);
            break;
        default:
            break;
    }
    box9.innerText = result;
}
calc.addEventListener("click", calculation);