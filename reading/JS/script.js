let mys = document.querySelector(".mys-content");
dark = true;

function lightning(){
    if(Math.random() > 0.6 && dark){
        mys.style.backgroundColor = "rgba(0,0,0,0.1)";
        dark = false;
    }
    else{
        mys.style.backgroundColor = "rgba(0,0,0,0.4)";
        dark = true;
    }
}

setInterval(lightning, 60);