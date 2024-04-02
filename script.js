
let show = (innerP) => {
   let para =  document.querySelector(innerP);
   if(para.style.display === "none"){
    para.style.display = "block"
   }
   else {
    para.style.display = "none"
   }
}
