<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script>

    while(1){
      var num1 = prompt('첫번째 숫자','숫자를 입력해 주세요');
      if(isNaN(num1)) alert('숫자만 입력가능!');
      else break;
    }
    while(1){
      var num2 = prompt('두번째 숫자','숫자를 입력해 주세요');
      if(isNaN(num2)) alert('숫자만 입력가능!');
      else break;
    }

    document.write(Number(num1)+Number(num2));
    </script>
  </body>
</html>
