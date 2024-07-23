

    
var navi = document.getElementsByClassName("menubar")[0].addEventListener("click",function(){
menu()
});


function menu(){
var hello = document.getElementsByTagName("ul")[0];

hello.classList.toggle("menubar");

for(var i=0;i<4;i++){
var mass =  document.getElementsByClassName("menulists")[i].addEventListener("click",function(){

document.getElementsByTagName("ul")[0].classList.remove("menubar");

});
}  

}
