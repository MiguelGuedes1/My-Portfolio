function abrirmenu(){
    var barramenuaberto=document.getElementsByClassName("barramenu")[0];
    
    barramenuaberto.style.width = barramenuaberto.style.width || "0px";
    // Esta linha define a largura da barra de menu como "0px" se ainda não tiver sido definida.

    if(barramenuaberto.style.width=="0px"){
        barramenuaberto.style.width="140px";
    } else{
        barramenuaberto.style.width="0px";
    }

}
