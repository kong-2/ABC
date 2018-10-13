<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form name="frm">
      <input type="text" name="text" value="">
      <input type="button" onclick="put_text()" value="click">

      <script>
        function put_text(){
          var frm = document.forms['frm']['text'];
          frm.value = '값을 입력';
        }
      </script>
    </form>
  </body>
</html>
