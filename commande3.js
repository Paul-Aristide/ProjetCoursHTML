const acces1 = document.querySelector("#Elogin");
const acces2 = document.querySelector("#Clogin");
const app_fenetre1 = document.querySelector(".frame");
const app_fenetre2 = document.querySelector(".mon_frame");

acces1.addEventListener("click",() =>{
    app_fenetre1.style.visibility ="visible";
    acces1.style.background ="white"
    acces1.style.color ="black"
    app_fenetre2.style.visibility ="hidden";
    acces2.style.background ="blue"
    acces2.style.color ="white"
});

acces2.addEventListener("click",() =>{
    app_fenetre2.style.visibility ="visible";
    acces2.style.background ="white"
    acces2.style.color ="black"
    app_fenetre1.style.visibility ="hidden";
    acces1.style.background ="blue"
    acces1.style.color ="white"
});