<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <style>
      #add_btn{
        border:0;
        padding: 5px 10px;
        background-color: #f80;
        color:white;
        border-radius: 5px;
      }
      #list{
          list-style-position: inside;
          padding: 0;
      }

      li{
        border-bottom: 1px solid #999;
      }

      .active{background-color:red;}
    </style>
  </head>
  <body>
    <h1 id="title">할 일 목록</h1>
    <button type="button" id="add_btn">목록추가</button>
    <ul id="list">
      <li>제목1</li>
      <li>제목2</li>
      <li>제목3</li>
      <li>제목4</li>
    </ul>
    <script>
      var title = document.getElementById('title');
      var list = document.getElementById('list');
      var li = list.getElementsByTagName('li');
      var add_btn = document.getElementById('add_btn');

      list.addEventListener('click',activeItem)

      function activeItem(event){

        if(event.target.nodeName=='LI'){
          title.innerHTML=event.target.innerHTML;

          for(var i=0; i<event.target.parentNode.children.length; i++){
            event.target.parentNode.children[i].removeAttribute('class');
          }

            event.target.setAttribute('class','active');
        }



      }

      add_btn.addEventListener('click',function(){

        var txt = prompt('제목입력');
        list.innerHTML += '<li>'+txt+'</li>';
      });


    </script>
  </body>
</html>
