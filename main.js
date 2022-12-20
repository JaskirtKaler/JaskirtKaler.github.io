"use strict"
const btnSkill = document.getElementById("skill-btn");
const btnAbout = document.getElementById("about-btn");
const btnContacts = document.getElementById("contacts-btn");
const skillmodel = document.getElementById("models");
const techmodel = document.getElementById("tech-model");
const softmodel = document.getElementById("soft-model");

const tec = document.getElementById("tec");
const sof = document.getElementById("sof");
const abo = document.getElementById("abo");
const con = document.getElementById("con");






btnSkill.addEventListener("click", function a(){ // when skill btn is clicked
    btnSkill.style.backgroundColor = "#eb2f64";
    btnAbout.style.backgroundColor = "";
    btnContacts.style.backgroundColor = "";
    skillmodel.style.display = "";
    tec.style.display = "none";
    abo.style.display = "none";
    sof.style.display = "none";
    con.style.display = "none";
   
    

});
btnAbout.addEventListener("click", function b(){ // when about btn is clicked
    btnSkill.style.backgroundColor = "";
    btnAbout.style.backgroundColor = "#eb2f64";
    btnContacts.style.backgroundColor = "";
    skillmodel.style.display = "none"; // shows
    
    tec.style.display = "none";
    sof.style.display = "none";
    abo.style.display = "flex"; // show about message
    con.style.display = "none";

    
    
    
});
btnContacts.addEventListener("click", function a(){ // when contacts btn is clicked
    btnSkill.style.backgroundColor = "";
    btnAbout.style.backgroundColor = "";
    btnContacts.style.backgroundColor = "#eb2f64";
    skillmodel.style.display = "none"; // shows
    tec.style.display = "none";
    sof.style.display = "none";
    abo.style.display = "none";
    con.style.display = "flex";

   
});

techmodel.addEventListener("click", function d(){
    skillmodel.style.display = "none";
    tec.style.display = "flex";
    sof.style.display = "none";
    abo.style.display = "none";
    con.style.display = "none";


    
    
});

softmodel.addEventListener("click", function e(){
    skillmodel.style.display = "none";
    sof.style.display = "flex";
    tec.style.display = "none";
    abo.style.display = "none";
    con.style.display = "none";

});










