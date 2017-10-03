 var i = document.getElementsByClassName('button');
  i = i.length;
  var z = -1;
  for (i.length >0; i<i*2+1; i++) {  
     z++;
      var j =document.getElementsByClassName('button')[z].innerText;
      alert(j);
  }    
