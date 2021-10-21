var dots = document.getElementsByClassName("dot");

function onActive(ref) {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[ref].className += " active";
}

var topref = document.getElementById("second");        
window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop;

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if(st < topref.offsetHeight) {
        dots[0].className += " active";
    } else if(st < topref.offsetHeight * 2) {
        dots[1].className += " active";
    } else {
        dots[2].className += " active";
    }
}, false);


function toggleStageLeft() {
    var left = document.getElementById("left");
    var right = document.getElementById("right");

    document.getElementById("time2").id = "time";
    document.getElementById("lab").innerHTML = "Stage 1";
    left.classList.remove("hoverEnabled");
    left.classList.add("hoverDisabled");
    right.classList.remove("hoverDisabled");
    right.classList.add("hoverEnabled");
}

function toggleStageRight() {
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    
    document.getElementById("time").id = "time2";
    document.getElementById("lab").innerHTML = "Stage 2";
    right.classList.remove("hoverEnabled");
    right.classList.add("hoverDisabled");
    left.classList.remove("hoverDisabled");
    left.classList.add("hoverEnabled");
}
