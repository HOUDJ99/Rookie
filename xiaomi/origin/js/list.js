var goods = document.querySelector(".reuslt-order-box");


var uL = document.getElementsByClassName("pagination")[0];

var li1 = uL.getElementsByTagName("li")[0]




var page = uL.getElementsByClassName("page-item");

//生成数据
var str = data.map(function (item, index) {
    return `
        <div class="goods-item">
        <div class="imgs">
            <a href="javascript:void(0);" class= "hyperlink">
                <img src="${item.imgs}" alt="" >
            </a>
        </div>
            <div class="Texts">${item.text}</div>
            <div class="price">${item.price}${"元"}</div>
            <div class="shopping">购物车</div>
    </div>
    `
}).join("");


goods.innerHTML = str;


//由于是渲染的标签 要写在渲染结束下面 

var goodsitem = document.querySelectorAll(".goods-item");
var imgstr = document.querySelectorAll("img");
var shopping = document.querySelector(".shopping");






for (var i = 0; i < imgstr.length; i++) {
    //遍历所有图片 拿到每一个图片添加点击事件
    //拿到每一张图片
    var ele = imgstr[i];
    // console.log(ele);
    ele.index = i;
    ele.onclick = function () {
        var item = data[this.index];
        console.log(item);
        //跳转到详情页
        window.location.href = "../html/particulars.html?" + RBQ(item);

    }
}
//跳转购物车

for (var i = 0; i < imgstr.length; i++) {
    //遍历所有图片 拿到每一个图片添加点击事件
    //拿到每一张图片
    var ele = imgstr[i];
    ele.index = i;
    goods.onclick = function (e) {
        // 判断是谁触发了事件
        if (e.target.className === "shopping") {

            var print = e.target.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild
            console.log("---------------");
            // console.log(print);
            var items = data[print.index]
            console.log(items);
            
            //跳转到详情页
            window.location.href = "../html/shopping.html?" + RBQ(items);
        }
    }

}


function RBQ(a) {
    var arr = [];
    for (var key in a) {
        arr.push(`${key}=${a[key]}`)
    }
    return arr.join("&");
}

//要从多少条开始生成数据
var numb = 20;


uL.onclick = function (e) {
    //点击数字跳转到指定页面
    //  e.stopPropagation ()
    if (e.target.nodeName.toLowerCase() === "a") {
        var text1 = e.target.innerHTML;
    }

    //当点击的是第一个 就把numb设置为0  
    if (text1 == 1) {
        numb = 0;
    }
    //number 点击哪个按钮 就按钮的值 乘 numb  再减 20 就是从哪里开始拿数据
    var number = numb * text1 - 20;

    //如果点击的是 1  是不能减20的  要判断一下 
    if (numb == 0) {
        number = numb * text1;
    }

    var str1 = 20 * text1;

    //因为拿到的数据是字符串 要用数组装起来 才能用map遍历
    var datalist = [];
    for (var i = number; i < data.length; i++) {
        if (i < str1) {
            datalist.push(data[i])
            // console.log(datalist); 
            var str = datalist.map(function (item, index) {
                return `
                        <div class="goods-item">
                        <div class="imgs">
                            <a href="javascript:void(0);" class= "hyperlink">
                                <img src="${item.imgs}" alt="" >
                            </a>
                        </div>
                            <div class="Texts">${item.text}</div>
                            <div class="price">${item.price}${"元"}</div>
                            <div class="shopping">购物车</div>
                    </div>
                    `
            }).join("");

            goods.innerHTML = str;
        }
    }

    numb = 20;
}

$(() => {
    $(".reuslt-order-box").on("mouseenter", ".goods-item", function () {
        $(this).children(".shopping").css("display", "block")

    })

    $(".reuslt-order-box").on("mouseleave", ".goods-item", function () {
        $(this).children(".shopping").css("display", "none")

    })
    $(".reuslt-order-box").on("cilck", ".goods-item", function () {
        $(this).children(".shopping").attr("location", "../html/shopping.html");

    })
})