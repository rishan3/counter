const count = document.getElementById("count");
let a=0;
function resetcount(){
  a=0;
  count.innerText=a;
  count.style.color="black";
}
function increasecount(){
   count.innerText=++a;
   a>0 ? count.style.color="green": 
   count.style.color="red";
}
function decreasecount(){
   count.innerText=--a;
   a>0 ? count.style.color="green": 
  count.style.color="red";
}
