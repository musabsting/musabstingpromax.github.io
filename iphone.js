let show=document.querySelector(".rounded-pill");
let hide=document.querySelector(".rounded-circle");


show.onclick=function musb(){

    hide.style.display="none";

    show.style.cssText="width:120px;transition:2s;transform:scale(1,1);color:white;height:100px";
  show.classList.remove("text-dark");
  show.classList.add("text-white");
   
}
let btn = document.querySelector(".btn");
console.log(btn)

btn.onclick=function(){
    show.style.cssText=" transform:scale(1.3);transition:2s";
    hide.style.display="none";
 
    let add= document.createTextNode("hi iam musab iam working creating dynmic island")
    let show=document.querySelector(".rounded-pill");
   show.appendChild(add);
}

show.onmouseleave=function(){
   
    show.style.cssText="justify-content:center;transition:2s;";
    hide.style.display="block";
    show.classList.remove("text-white");
    show.classList.add("text-dark");
 
}

btn.onmouseleave=function(){
    show.style.cssText=" transform:scale(1.1);transition:2s";
    hide.style.display="block";
}
let app = document.querySelector(".linkmusab");

app.addEventListener("click",function(){
    hide.style.display="none";
    show.style.display="none";
    let img = document.createElement("img");
    img.src="iphoto/st.jpg";
    img.cssText=" display:block;width:100px; height:40px";
    img.classList.add("w-100");
    img.classList.add("mt-3");
    img.classList.add("rounded");
    let appi = document.querySelector(".d-flex");
    appi.prepend(img);



})
let appi = document.querySelector(".d-flex");
console.log(appi)
