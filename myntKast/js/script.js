function myntkast(min, max ){
    let heads = 0;
    let tails = 1; 

    let resultat = "";
    
    let array = [0, 0, 1, 1, 0, 1, 0, 1];
    
    if(Math.random() < 0.50){
        heads++;
        console.log("heads")
        document.getElementById("resultat").innerHTML = resultat + "heads";
    } else {
        tails++;
        console.log("tails")
        document.getElementById("resultat").innerHTML = resultat + "tails";
    }
    
}

function onload(){
    document.getElementById("myntkast").addEventListener("click", myntkast);
}