let reviews = null;
async function  fetchReviews(){
    const response = await fetch("reviews.json");
    reviews = await response.json();
    window.dispatchEvent(dataFetch);
}

window.addEventListener("DOMContentLoaded",fetchReviews);
const dataFetch = new CustomEvent('dataFetch');

const image = document.querySelector("img");
const nome = document.querySelector(".name");
const role = document.querySelector(".role");
const description = document.querySelector(".description");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const surprise = document.querySelector(".surp");
window.addEventListener("dataFetch", () => {
    let counter = 0;
    nome.textContent = reviews[counter].name;
    role.textContent = reviews[counter].job;
    description.textContent = reviews[counter].text;
    image.src = reviews[counter].img;

    next.addEventListener("click", () =>{
        if(counter==(reviews.length - 1)){
            counter=0;
        }else{
            counter++;
        }
        nome.textContent = reviews[counter].name;
        role.textContent = reviews[counter].job;
        description.textContent = reviews[counter].text;
        image.src = reviews[counter].img;
    })
    prev.addEventListener("click", () =>{
        if(counter==0){
            counter=reviews.length - 1;
        }else{
            counter--;
        }
        nome.textContent = reviews[counter].name;
        role.textContent = reviews[counter].job;
        description.textContent = reviews[counter].text;
        image.src = reviews[counter].img;
    })
    surprise.addEventListener("click", () =>{
        counter = Math.floor(Math.random()*reviews.length);
        nome.textContent = reviews[counter].name;
        role.textContent = reviews[counter].job;
        description.textContent = reviews[counter].text;
        image.src = reviews[counter].img;
    })

})