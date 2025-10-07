document.getElementById("vis-info").onclick = visInfo;
document.getElementById("skjul-info").onclick = skjulInfo;
document.getElementById("rigtigt-svar").onclick = rigtigtSvar;
document.getElementById("forkert-svar").onclick = forkertSvar;


function visInfo(){
    document.getElementById("flip-funktion").style.transform = "rotateY(-180deg)";
}

function skjulInfo(){
    document.getElementById("flip-funktion").style.transform = "rotateY(0deg)";
}

function rigtigtSvar(){
    document.getElementById("top-ikon").innerHTML = "<img src='assets/checkmark.svg' alt='Fly Leg'>";
}

function forkertSvar(){
    document.getElementById("top-ikon").innerHTML = "<img src='assets/xmark.svg' alt='X-symbol'>";
}

