let tog = document.querySelector(".menu-toggle>button");
let navbar = document.querySelector(".nav-menu");
let soc = document.querySelector(".social");
let is_open = true;

tog.addEventListener("click", openClose);

function openClose(){
    if (is_open){
        is_open = false;
        tog.innerHTML = "+";
        navbar.style.display = 'none';
    }
    else if (!(is_open)){
        is_open = true;
        tog.innerHTML = "-";
        navbar.style.display = 'flex';
    }
    else{
        console.log("Weird Error");
    }
}

let start = 67;

setInterval(function(){
    start = (start + 40) % 360; 
    if(window.innerWidth >= 700)
    {
        is_open = true; 
        navbar.style.display = 'flex'; 
        tog.innerHTML = '-'; 
    } 
    soc.style.backgroundImage = `linear-gradient(${start + "deg"}, blue, violet)`;
}, 500
);