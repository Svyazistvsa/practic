"use strict"

let up = document.querySelector(".up"),
    left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    bottom = document.querySelector(".bottom"),
    cube = document.querySelector(".cube"),
    inex = document.querySelector(".in_ex"),
    rotateX = 0,
    rotateY = 0,
    timerId;    

function rotDown(e){

    function action (e){        

        if(e.target == up) rotateX += 4;
        if(e.target == bottom) rotateX -= 4;
        if(e.target == left) rotateY -= 4;
        if(e.target == right) rotateY += 4;
    
        cube.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;    
    }

    timerId = setInterval(action, 100, e);
    return false;
}

function rotStop(){
    clearInterval(timerId);
    return false;
}



inex.addEventListener('pointerdown', rotDown);
inex.addEventListener('pointerup', rotStop);
inex.addEventListener('pointerleave', rotStop);