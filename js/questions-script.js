document.getElementById("vis-info").onclick = visInfo;
document.getElementById("skjul-info").onclick = skjulInfo;
document.getElementById("korrekt-svar").onclick = korrektSvar;
document.getElementById("forkert-svar").onclick = forkertSvar;


function visInfo(){
    document.getElementById("flip-funktion").style.transform = "rotateY(-180deg)";
}

function skjulInfo(){
    document.getElementById("flip-funktion").style.transform = "rotateY(0deg)";
}

function korrektSvar(){
    document.getElementById("top-ikon").innerHTML = "<img src='assets/checkmark.svg' alt='Fly Leg'>";
    document.getElementById("dark-overlay").style.display = "flex";
    document.getElementsByClassName("korrekt-feedback")[0].style.display = "block";
    document.getElementsByClassName("korrekt-feedback")[1].style.display = "block";}

function forkertSvar(){
    document.getElementById("top-ikon").innerHTML = "<img src='assets/xmark.svg' alt='X-symbol'>";
    document.getElementById("dark-overlay").style.display = "flex";
    document.getElementsByClassName("forkert-feedback")[0].style.display = "block";
    document.getElementsByClassName("forkert-feedback")[1].style.display = "block";
}

