let friendship = document.querySelector("h2");
let btn = document.querySelector(".add");
let check = 0 ;


btn.addEventListener("click",function(){
if (check==0){  
   friendship.innerHTML = "friends";
   friendship.style.color = "green";
   check=1
   btn.innerHTML= "remove"
   btn.style.backgroundColor = "red"
  
}else{
   friendship.innerHTML = "stanger";
   friendship.style.color = "red";
   check=0
   btn.innerHTML= "Add friend"
   btn.style.backgroundColor = "rgb(43, 130, 133)"
}
})


