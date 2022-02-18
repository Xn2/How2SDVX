const icon = document.getElementById("icon")
const main_logo = document.getElementById("main_logo")
const p = document.getElementById("p")
const btn = document.getElementById("button")
const I = document.getElementById("I")
const II = document.getElementById("II")
const III = document.getElementById("III")
const IV = document.getElementById("IV")
const V = document.getElementById("V")
const VI = document.getElementById("VI")

function testo(){
    p.textContent = "zizi"
}

function OpenMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function CloseMenu() {
      document('myDropdown').classList.toggle("show")
  }



dropbtn.addEventListener('click',OpenMenu)
dropbtn.addEventListener('close',CloseMenu)
I.addEventListener('click',scrolltoconcept)
II.addEventListener('click',scrolltoquickstart)
III.addEventListener('click',scrolltoscoring)
IV.addEventListener('click',scrolltoskillanalyser)
V.addEventListener('click',scrolltovolforce)
VI.addEventListener('click',scrolltooptions)

function scrolltoconcept() {
    const concept = document.getElementById("concept")

    concept.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });

}

function scrolltoquickstart() {
    const quickstart = document.getElementById("quick-start")

    quickstart.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });

}

function scrolltoscoring() {
    const scoring = document.getElementById("scoring")

    scoring.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });

}

function scrolltoskillanalyser() {
    const skillanalyser = document.getElementById("skill-analyzer")

    skillanalyser.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });

}

function scrolltovolforce() {
    const volforce = document.getElementById("volforce")

    volforce.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    
    });

}

function scrolltooptions() {
    const options = document.getElementById("options")

    options.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
    });

}

