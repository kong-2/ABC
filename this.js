<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <ul id="gnb">
      <li>click</li>
      <li>second</li>
      <li>third</li>
    </ul>

    <script>
      var gnb = document.getElementById('gnb');
      var li = gnb.getElementsByTagName('li');

      li[0].onclick = function(){
        this.style.backgroundColor ='red';
      };

    </script>
  </body>
</html>
