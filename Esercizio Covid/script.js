let covidData= null;
let countries = [];
let totals = [];
let maxTotalConfirmed = null;
async function fetchData(){
    const response = await fetch("https://api.covid19api.com/summary");
    covidData = await response.json();
    covidData.Countries.forEach(element => {
        countries.push(element.Country);        
    });
    covidData.Countries.forEach(element => {
        totals.push(element.TotalConfirmed);        
    });
    maxTotalConfirmed = Math.max(...totals);
    window.dispatchEvent(dataFetch);

    
}

window.addEventListener('load',fetchData);
const dataFetch = new CustomEvent('dataFetch');

const totalConfirmed = document.querySelector("#global");
const totalLocal = document.querySelector("#max");
const nations = document.querySelector(".listOfNations");
window.addEventListener("dataFetch", () => {
    totalConfirmed.innerHTML= covidData.Global.TotalConfirmed;
    totalLocal.innerHTML = maxTotalConfirmed;

    for(let i=0; i<countries.length; i++){
        const item = document.createElement("li");
        item.innerHTML=countries[i];
        nations.append(item);
    }

})