function myFunction(){
    let tall1 = document.getElementById("tall1");
    let tall2 = document.getElementById("tall2")

    let v1 = tall1.value;
    let v2 = tall2.value;

    if(isNaN(v1) && isNaN(v2)){
        alert("Tall 1 og Tall 2 er ugyldige.")
        tall1.style.backgroundColor = "red";
        tall2.style.backgroundColor = "red";
        return;
    }if(isNaN(v1)) {
        alert("Tall 1 er ikke gyldig")
        tall1.style.backgroundColor = "red";
        return;
    }if(isNaN(v2)) {
        alert("Tall 2 er ikke gyldig")
        tall2.style.backgroundColor = "red";
        return;
    }

    // sjekke tall2 også

    // Tilbakestille styles på input
    tall1.style.backgroundColor = "";
    tall2.style.backgroundColor = "";

    let resultat = v1 * v2;
    
    document.getElementById("resultat").innerHTML = resultat;
}

function clear(){
    document.getElementById("tall1").value = "";
    document.getElementById("tall2").value = "";
    document.getElementById("resultat").innerHTML = "";
    tall1.style.backgroundColor = "";
    tall2.style.backgroundColor = "";
}

function onload() {
    document.getElementById("gangebtn").addEventListener("click", myFunction);
    document.getElementById("slettebtn").addEventListener("click", clear);
}

