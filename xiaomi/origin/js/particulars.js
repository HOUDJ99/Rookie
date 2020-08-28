var ch = decodeURI(window.location.search.slice(1));

console.log(ch);

//查询字符串转换为一个对象
function que(oppo){
    var arr= oppo.split("&");
    var  o ={};
    arr.forEach(function(ele){
        var tmpArr = ele.split("=");
        var key = tmpArr[0]
        var val = tmpArr[1]
        o[key] = val
    })
    return o ;
}

var obj =que(ch);

var imgs = document.querySelector("img");

var texts = document.querySelector(".Texts");

var price = document.querySelector(".price");
var shopping = document.querySelector(".shopping");

imgs.src = obj.imgs;
texts.innerHTML = obj.text;
price.innerHTML = obj.price;
shopping.innerHTML = "购物车";


