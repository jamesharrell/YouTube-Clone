<?php

  ob_start() ;
  session_start();


 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Login Page</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    <div class="container">

      <?php

        if (isset($_SESSION['id_user'])&&isset($_SESSION['name'])) {
          ?>
          <h1>Account Page</h1>

          <div class="account field-sec">
            <h2>Hello , <?=$_SESSION['name']?></h2>
            <button type="button" id="logout">Logout!</button>
          </div>
          <script type="text/javascript">
            var logoutBtn  = document.getElementById('logout') ;
            logoutBtn.onclick = function () {
              var http = new XMLHttpRequest();
              var url = "assets/logout.php";
              http.open("get", url, true);

              //Send the proper header information along with the request
              http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

              http.onreadystatechange = function() {//Call a function when the state changes.
                  if(http.readyState == 4 && http.status == 200) {
                    document.location.href = 'login.php';
                  }
              }
              http.send();
            }
          </script>
          <?php
        }else {
          ?>
          <h1>Login Page</h1>

          <form id="login-form" method="post">
            <div class="field-sec">
              <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter you email address">
            </div>
            <div class="field-sec">
              <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter you password ">
            </div>
            <div class="field-sec">
              <p class="error-msg"></p>
            </div>
            <div class="field-sec">
              <button type="button" id="login">Login!</button>
            </div>

          </form>
          <script type="text/javascript">

            var loginBtn  = document.getElementById('login') ;
            loginBtn.onclick = function () {
              var email  = document.getElementById('email') ;
              var password  = document.getElementById('password') ;
              var message = document.getElementsByClassName('error-msg');

              function isValidEmailAddress(emailAddress) {
                var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
                return pattern.test(emailAddress);
                };

              if (isValidEmailAddress(email.value)) {
                var http = new XMLHttpRequest();
                var url = "assets/login.php";
                var params = "email="+email.value+"&password="+password.value;
                http.open("POST", url, true);

                //Send the proper header information along with the request
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                http.onreadystatechange = function() {//Call a function when the state changes.
                    if(http.readyState == 4 && http.status == 200) {
                      message[0].innerHTML = http.responseText ;
                      if (http.responseText = "success") {
                        document.location.href = 'login.php';
                      }
                    }
                }
                http.send(params);
              }else {
                message[0].innerHTML = "Wrong Email format , your email should like that example@domain.com" ;
              }

            }

          </script>
          <?php
        }

       ?>



    </div>


  </body>
</html>
