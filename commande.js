
const choisir = document.querySelector("#sel");
const choisir1 = document.querySelector("#sele");
const choisir2 = document.querySelector("#sels");

const res_choix = document.querySelector(".filiere");


choisir.addEventListener("click" , ()=>{
    res_choix.style.visibility = "visible";
});

choisir1.addEventListener("click" , ()=>{
    res_choix.style.visibility = "visible";
});

choisir2.addEventListener("click" , ()=>{
    res_choix.style.visibility = "visible";
});

res_choix.addEventListener("click" , ()=>{
    res_choix.style.visibility = "hidden";
    res_choix.style.transition = "2s ease";
});

