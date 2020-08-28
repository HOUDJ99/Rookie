var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var sec = document.querySelector(".sec");

var textone = document.querySelector(".textone")
var texttow = document.querySelector(".text1").firstElementChild.nextElementSibling;
console.log(texttow);
var shopping = document.querySelector(".shopping");

//跳转注册页面
textone.onclick =function() {
    window.location.href = "../html/login.html";
}
//跳转登录页面
texttow.onclick =function() {
    window.location.href = "../html/rejister.html";
}

shopping.onclick =function() {
    window.location.href = "../html/shopping.html";
}

setInterval(function () {
    sec.innerHTML = sec.innerHTML - 1;

    if (sec.innerHTML < 10 && sec.innerHTML >= 0) {
        sec.innerHTML = 0 + sec.innerHTML;
    } else if (sec.innerHTML <= 0) {
        sec.innerHTML = 59;
        minute.innerHTML = minute.innerHTML - 1;
    }
    if (minute.innerHTML < 10 && minute.innerHTML >= 0) {
        minute.innerHTML = 0 + minute.innerHTML;
    } else if (minute.innerHTML <= 0) {
        minute.innerHTML = 59;
        hour.innerHTML = 0 + hour.innerHTML - 1;
    }
    if (sec.innerHTML == 0 && minute.innerHTML == 0 && hour.innerHTML == 0) {
        sec.innerHTML = 59;
        minute.innerHTML = 59
        hour.innerHTML = 0 + 3;
    } {

    }
}, 1000)


var mk42block = document.querySelector(".mk42block");
var mk43block = document.querySelector(".mk43block");

var mk42 = document.querySelector(".mk42");
var mk43 = document.querySelector(".mk43");

var title = document.querySelector(".title");
var fla = document.querySelector(".fla");

mk42block.onmouseover = function () {
    mk43.style.display = "none";
    mk42.style.display = "block";
}
mk43block.onmouseover = function () {
    mk42.style.display = "none";
    mk43.style.display = "block";
}

var true1 = true;
var true2 = true;
title.onclick = function (e) {
    if (e.target.className == "sp1") {

        if (!true1) {
            return
        }
        e.target.nextElementSibling.style.background = "yellow"
        e.target.style.background = "#ccc";
        var lock = 0;
        var time = setInterval(function () {
            lock += 5;

            fla.style.left = -lock + "px";
            if (lock >= 776) {
                clearInterval(time)
                fla.style.left = -776 + "px"
            }
        }, 5)
        true1 = false;
        true2 = true;
        
    } else if (e.target.className == "sp2") {
        if (!true2) {
            return
        }
        e.target.previousElementSibling.style.background = "yellow";
        var locks = -776;
        var times = setInterval(function () {
            locks += 5;
            e.target.style.background = "#ccc";
            fla.style.left = locks + "px";
            if (locks >= 234) {
                clearInterval(times)
                fla.style.left = 234 + "px"
            }
        }, 5)
        true2 = false;
        true1 = true;
    }

}
var span8 = document.querySelector(".span8").firstElementChild;
console.log(span8);
span8.onmouseover = function(e) {
    if (e.target.nodeName.toLowerCase() === "img") {
        e.target.style.marginTop = "-5px"
        e.target.style.boxShadow ="0px 10px 20px 5px #ccc"
    } 
}

span8.onmouseout = function(e) {
    if (e.target.nodeName.toLowerCase() === "img") {
        e.target.style.marginTop= "0px"
        e.target.style.boxShadow ="none"
    } 
}


var span9 = document.querySelector(".span9").firstElementChild;
console.log(span9);
span9.onmouseover = function(e) {
    if (e.target.nodeName.toLowerCase() === "img") {
        e.target.style.marginTop = "-5px"
        e.target.style.boxShadow ="0px 10px 40px 10px #ccc"
    } 
}

span9.onmouseout = function(e) {
    if (e.target.nodeName.toLowerCase() === "img") {
        e.target.style.marginTop= "0px"
        e.target.style.boxShadow ="none"
    } 
}