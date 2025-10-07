document.getElementById("vda").onclick = myFunction;

function myFunction() {
  var x = document.getElementById("hide-show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}