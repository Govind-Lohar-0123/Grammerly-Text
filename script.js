///////variable////
let text=document.querySelector("textarea");
let total=document.querySelector(".char");
let remain=document.querySelector(".remain");
let totalChar=0;



//////function copy text/////
let copyText=()=>{
   text.select();
   text.setSelectionRange(0,999);
   navigator.clipboard.writeText(text.value);

}
text.innerHTML=""
text.addEventListener("keyup",(e)=>{
    totalChar=text.value.length;
    total.textContent=`Total Character : ${totalChar}`
    remain.textContent=`Remaining Character:${150-totalChar}`;
})

