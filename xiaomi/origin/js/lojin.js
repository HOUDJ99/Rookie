;
(function () {

     var username = document.getElementById("username");
     var password = document.getElementById("password");
     console.log(password);
     var btn = document.getElementsByClassName("btn-primary")[0];
     var $text = document.querySelector(".text-muted");


     var regularuser = /^[\D][a-zA-Z0-9_-]{4,16}$/;
     var regularpass = /^[\D][a-zA-Z0-9_-]{8,16}$/;

     var user_lock = false;
     var pass_lock = false;

     username.onblur = function () {
          var user = username.value;
          console.log(user);

          var $trues0 = regularuser.test(user);

          if (!$trues0) {

               $($text).text("请输入合适的用户名");
               $($text).css("display", "block");
               $($text).css("color", "red");
               user_lock = false;
               return;
          }

          QF.pGet("../php/check.php", {
               username: user
          })
          .then(function (data) {
               if (!data.error) {
                    $($text).css("display", "block");
                    $($text).css("color", "green");
                    $($text).text(data.msg);
                    
                    user_lock = true;
               } else {
                    $($text).css("display", "block");
                    $($text).css("color", "red");
                    $($text).text(data.msg);
               }
          })
          .catch(function (err) {
               console.log(err);
               user_lock = false;
           });
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
          pass_lock = true;
          $($text).css("display", "block");
          $($text).text("密码符合规范");
          $($text).css("color", "green");

     }

     btn.onclick = function () {

          if(!(user_lock && pass_lock)) {
               return;
          }    

          QF.pPost("../php/userinfo.php", {username: username.value, password: password.value})
                .then(function(data) {
                    if (!data.error) {
                        alert(data.msg);
                        // 成功之后 我们要跳转到登录页面 
                        location.href = "../html/rejister.html";
                    } else {
                        throw new Error(data.msg);
                    }
                })
                .catch(function(e) {
                    alert("注册失败");
                })
     }

})();