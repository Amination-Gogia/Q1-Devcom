let head = document.querySelector(".page-title");

let colors = ["rgba(124, 41, 42, 0.3)",  "rgba(255, 165, 0, 0.3)","rgba(0, 0, 128, 0.3)", "rgba(127, 0, 255, 0.3)"];

let index = 0;

function disco (){
    if(Math.random() > 0.5){
        head.style.backgroundColor = colors[index];
        index = (++index) % 4 ;
    }
}
setInterval(disco, 500);