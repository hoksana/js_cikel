function fib(n) {
  var a = 1, b = 1;  //началные условия
  if(n==1)
  {
    alert(a);
  }
  else if(n==2)
  {
    alert (a + "," +b);
  }
  else if(n>=3)
  {
    
    for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  alert(a+ " " + b); 
  alert(c);         
   }    
  }
 
 fib(6);