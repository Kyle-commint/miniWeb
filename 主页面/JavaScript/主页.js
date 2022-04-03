window.onload = function(){
    if (!this.isShow){ //点击收放按钮时调节评论区位置
      oDiv = document.getElementById('comment').getElementsByTagName('ul')[0].style.width="883px"
    }
    oSpan = document.getElementById("comment").getElementsByTagName('span')
    var I_list = document.getElementById("comment").getElementsByTagName('i') //拿到评论区的点赞标签
    for(var i=0;i < I_list.length;i++){
        getConsole(i);
    }
    function getConsole(a){
      I_list[a].onclick = function(i){
        if(this.style.color==false){
          this.style.color = "orange";
          oSpan[(a + 1 ) * 3 ].innerHTML = Number(oSpan[(a + 1 ) * 3 ].innerHTML) + 1;
        }else if(this.style.color=="orange"){
          this.style.color = "";
          oSpan[(a + 1 ) * 3 ].innerHTML = Number(oSpan[(a + 1 ) * 3 ].innerHTML) - 1;
        }
      }
    }

   
   
    

   
    
  }