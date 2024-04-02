let geticon = document.querySelector(".img-faq");
let geticon1 = document.querySelector(".img-faq1");
let geticon2 = document.querySelector(".img-faq2");
let geticon3 = document.querySelector(".img-faq3");
let show = () => {
   let para =  document.querySelector(".p-show");
   if(para.style.display === "none"){
    para.style.display = "block"
   }
   else {
    para.style.display = "none"
   }
}
let show1 = () =>{
    let p1 = document.querySelector(".p-show1");
    if(p1.style.display === "none"){
        p1.style.display = "block"
       }
       else {
        p1.style.display = "none"
       }

}
let show2 = () =>{
    let p2 = document.querySelector(".p-show2");
    if(p2.style.display === "none"){
        p2.style.display = "block"
       }
       else {
        p2.style.display = "none"
       }

}
let show3 = () =>{
    let p3 = document.querySelector(".p-show3");
    if(p3.style.display === "none"){
        p3.style.display = "block"
       }
       else {
        p3.style.display = "none"
       }
    }


 geticon.addEventListener("click", show)
geticon1.addEventListener("click", show1)
geticon2.addEventListener("click", show2)
geticon3.addEventListener("click", show3)