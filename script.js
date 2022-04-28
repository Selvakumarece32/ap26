var myName=window.prompt("what is your name?");

document.writeln("welcome "+myName);

document.getElementById("myValue").onclick=function(){
   var myS =document.getElementById("myName").value;
   console.log(myS);
   document.writeln(myS);
}