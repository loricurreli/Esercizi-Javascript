const btn = document.querySelector(".main-container-button");
const colors = ["green","red","#f4ff32","rgb(255,20,233)"]
const main = document.querySelector(".main-container");
const whatColor = document.querySelector("span");
const elements = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const simple = document.querySelector(".nav-container-options-simple");
const hex = document.querySelector(".nav-container-options-hex");

simple.addEventListener("click", ()=>{
    btn.value="simple";
})
hex.addEventListener("click", ()=>{
    btn.value="hex";
})
btn.addEventListener("click", ()=>{
    if(btn.value=="simple"){
        const index = Math.floor(Math.random()*colors.length)
        main.style.backgroundColor = colors[index];
        whatColor.innerHTML=colors[index];
    }
    else if(btn.value=="hex"){
        let color = "#";
        for(let i=0; i<6; i++){
            const index = Math.floor(Math.random()*elements.length)
            color += elements[index];            
        }
        main.style.backgroundColor = color;
        whatColor.innerHTML=color;        
    }
})