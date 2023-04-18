function abrirmenu(){
    var barramenuaberto=document.getElementsByClassName("barramenu")[0]

    if(barramenuaberto.style.width=="0px"){
        barramenuaberto.style.width="140px"
    }
    else{
        barramenuaberto.style.width="0px"
    }

}