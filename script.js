

document.getElementById("john-back").addEventListener("click", goTanya);
document.getElementById("john-forward").addEventListener("click", goTanya);

function goTanya() {
    document.getElementById("john").style.display = "none";
    document.getElementById("tanya").style.display = "inline";
}

document.getElementById("tanya-back").addEventListener("click", goJohn);
document.getElementById("tanya-forward").addEventListener("click", goJohn);

function goJohn() {
    document.getElementById("tanya").style.display = "none";
    document.getElementById("john").style.display = "inline";
}