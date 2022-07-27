let tags = null;
let cat = null;

// vado a fetchare i tag da inserire nel dropdown
async function fetchData(){
    const response = await fetch("https://cataas.com/api/tags");
    const data = await response.json();
    tags = [...data.slice(4,9),...data.slice(14,19)];
    window.dispatchEvent(dataFetch);
}
async function fetchCat(url){
    const response = await fetch(url);
    cat = await response.json();
    cat=cat[0].tags;
    dropdown.dispatchEvent(dataFetch);
}

window.addEventListener('load',fetchData);
const dataFetch = new CustomEvent('dataFetch');
const container = document.querySelector(".container");
const image = document.querySelector("img");

// dopo aver fetchato i tag creo il dropdown
window.addEventListener("dataFetch", () => {
    
    const dropdown = document.createElement("select");
    dropdown.setAttribute("name", "list-of-ids");
    dropdown.setAttribute("id", "dropdown");
    const option = document.createElement("option");
    option.value="Select";
    option.innerHTML="Seleziona un ID";
    dropdown.append(option)
    container.append(dropdown);

    //aggiungo le opzioni al dropdown
    tags.forEach(tag => {
        const option = document.createElement("option");
        option.value=tag;
        option.innerHTML=tag;
        dropdown.append(option);        
    });
    const result = document.querySelector(".results");
    // mostro il gatto al change della select
    dropdown.addEventListener("change", ()=>{
        if(dropdown.value!='Select'){
            // recupero il primo gatto con quel tag
            const url = "https://cataas.com/api/cats?tags=" + dropdown.value +"&limit=1";
            fetchCat(url);
            const src = "https://cataas.com/cat/"+dropdown.value;
            image.src=src;
        }else{
            result.style.display="none";
        }
    })

    dropdown.addEventListener("dataFetch", ()=>{
        result.style.display="flex";
        const span = document.querySelector("span");
        let text ="";

        //creo la stringa coi tag
        for(let i = 0; i< cat.length; i++){
            if(i==0){
                text+=cat[i];
            } else{
                text= text + " - " + cat[i];
            }            
        }
        span.innerHTML=text
    })
})


