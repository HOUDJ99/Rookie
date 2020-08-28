;
(function () {

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var btn = document.getElementsByClassName("btn-primary")[0];
    var $text = document.querySelector(".text-muted");


    var regularuser = /^[\D][a-zA-Z0-9_-]{4,16}$/;
    var regularpass = /^[\D][a-zA-Z0-9_-]{8,16}$/;

    var user_lock = false;
    var pass_lock = false;

    username.onblur = function () {
        var user = username.value;

        var $trues0 = regularuser.test(user);

        if (!$trues0) {

            $($text).text("请输入合适的用户名");
            $($text).css("display", "block");
            $($text).css("color", "red");
            user_lock = false;
            return;
        }
        user_lock = true;
    }

    password.onblur = function () {

        var pass = password.value;

        var trues1 = regularpass.test(pass);

        if (!trues1) {

            $($text).text("当前密码不符合规范");
            $($text).css("display", "block");
            $($text).css("color", "red");
            pass_lock = false;
            return;
        }
        $($text).css("display", "block");
        $($text).text("密码符合规范");
        $($text).css("color", "green");
        pass_lock = true;
    }

    btn.onclick = function () {
        // 验证两把锁
        if (!(user_lock && pass_lock)) {
            return;
        }
       
        //发送请求
        QF.pPost("../php/rejister.php", {
                username: username.value,
                password: password.value
            })
            .then((data) => {
                if (!data.error) {
                    // 先获取URL的hash部分
                    var targetURL = location.hash.slice(1) || "../html/list.html";
                    console.log(targetURL);
                    // 提示用户
                    alert(data.msg);
                    // 登录成功 跳转到列表页
                    location.href = targetURL;
                } else {
                    alert(data.msg);
                }
            })
            .catch(function (data) {
                console.log(data);
            });
    }

})();