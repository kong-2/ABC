<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      label{
        float: left;
        width: 80px;
      }
      input, label{
        display: block;
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <form name ="frm">
      <label for="myId">ID: </label>
      <input type="text" id="myId" name="myId" />
      <label for="pwd">password: </label>
      <input type="text" name="pwd" id="pwd" />
      <input type="button" name="send_btn" value="로그인">

    </form>

    <script>
      var frm = document.frm;
      var myId = frm.myId;
      var pwd = frm.pwd;
      var send_btn = document.frm.send_btn;

      send_btn.onclick = function(){
          var newId = myId.value,
              newPwd = pwd.value;

              if(newId==''||newPwd==''){
                alert('아이디 또는 비밀번호가 입력되지 않았습니다.')
              }
              else{
                alert(myId.value +'님 환영합니다.')
              }
      };

    </script>
  </body>
</html>
