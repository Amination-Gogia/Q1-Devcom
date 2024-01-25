window.addEventListener("load", function(){alert("In case you're American, you might know this as soccer")});

let ron = document.querySelector("#ron");
let ronDesc = document.querySelector("#ron-desc"); 

ron.on = false;

let mes = document.querySelector("#mes");
let mesDesc = document.querySelector("#mes-desc"); 

mes.on = false;

ron.addEventListener("click", function(){
    this.on = true;
    mes.on = false;
    mesDesc.style.display = "none";
    this.style.border = "3px solid white";
    this.style.boxShadow = "0 0 8px silver";
    mes.style.border = "0px";
    mes.style.boxShadow = "0 0 0px white";
    ronDesc.style.display = "block";
});

mes.addEventListener("click", function(){
    this.on = true;
    ron.on = false;
    mesDesc.style.display = "block";
    this.style.border = "3px solid white";
    this.style.boxShadow = "0 0 8px silver";
    ron.style.border = "0px";
    ron.style.boxShadow = "0 0 0px white";
    ronDesc.style.display = "none";
});

ron.addEventListener("mouseover", function(){
    this.style.border = "3px solid white";
    this.style.boxShadow = "0 0 8px silver";
});

mes.addEventListener("mouseover", function(){
    this.style.border = "3px solid white";
    this.style.boxShadow = "0 0 8px silver";
});

mes.addEventListener("mouseleave", function(){
    if(!(this.on)){
        this.style.border = "0px";
        this.style.boxShadow = "0 0 0px white";
    }
});

ron.addEventListener("mouseleave", function(){
    if(!(this.on)){
        this.style.border = "0px";
        this.style.boxShadow = "0 0 0px white";
    }
})