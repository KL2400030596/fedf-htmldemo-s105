
    document.getElementById("demo").innerText= "Welcome to Javascript session";
let x;
x=prompt("Eter x value:");
let num = parseInt(x);
if(num>0) {
   document.getElementById("demo").innerText="is positive"; 
}
else if (num<0){
    document.getElementById("demo").innerText= "is negative";
}
else {
    document.getElementById("demo").innerText=" is zero";
}