<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script>
      var num = prompt('구구단 몇단?','1~9사이의 숫자 입력');

      if(num==''||isNaN(num)){
        alert('올바른 숫자를 입력하세요');
      }
      else if(num<1||num>10){
        alert('1~9까지 입력할 수 있습니다');
      }
      else {
        for(var i=1; i<=9; i++){
          document.write(num + '*' + i +'='+num*i+'<br>');
        }
      }
    </script>
  </body>
</html>
