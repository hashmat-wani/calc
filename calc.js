function press(val){
    var temp=document.querySelector('.display');
    if(temp.textContent==0)
    temp.textContent=val;
    else
    temp.textContent=temp.textContent+val;
  }
  function clr(){
    document.querySelector('.display').textContent=0;
  }