function encender(color) {
    document.getElementById("rojo").style.backgroundColor = "#330000";
    document.getElementById("amarillo").style.backgroundColor = "#332900";
    document.getElementById("verde").style.backgroundColor = "#003300";

    if (color === "rojo") {
        document.getElementById("rojo").style.backgroundColor = "red";
    }
    if (color === "amarillo") {
        document.getElementById("amarillo").style.backgroundColor = "yellow";
    }
    if (color === "verde") {
        document.getElementById("verde").style.backgroundColor = "lime";
    }
}