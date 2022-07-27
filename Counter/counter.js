const number = document.querySelector(".number");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");

dec.addEventListener("click", ()=>{
    let value = parseInt(number.innerHTML)-1;
    number.innerHTML= "" + value;
    if(value==0){
        number.style.color="black";
    }else if(value<0){
        number.style.color="red";
    }    
})

inc.addEventListener("click", ()=>{
    let value = parseInt(number.innerHTML)+1;
    number.innerHTML= "" + value;
    if(value==0){
        number.style.color="black";
    }else if(value>0){
        number.style.color="green";
    }    
})


res.addEventListener("click", ()=>{
    number.innerHTML= "0";
    number.style.color="black";
})