document.getElementById("parent").innerHTML=("something else");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-allign:center");
document.getElementsByClassName("exercise")[1].innerHTML=("I am index 2");
document.getElementsByTagName("h1")[1].innerHTML=("I am change");
document.querySelector("h1").style.cssText=("background-color:aqua; color:blue;");
document.querySelector(".mili").style.cssText=("background-color:green; color:pink;")

const change= document.querySelectorAll("h2");
for(i=0;i<=change.length; i++){
    change[i].innerHTML=("I am an alien");
}


function myFunction(){
    const element=document.body;
    element.classList.toggle("dark-mode");
}