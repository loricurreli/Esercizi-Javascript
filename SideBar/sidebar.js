const hamburger = document.querySelector(".hamb");
const sidebar = document.querySelector("aside");
const close = document.querySelector(".no-aside")


hamburger.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
})

close.addEventListener("click", ()=>{
    close.classList.add("close-animation");
    sidebar.classList.remove("show-sidebar");
    setTimeout( function() { close.classList.remove("close-animation");}, 1500);
})