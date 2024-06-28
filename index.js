let number=document.getElementById("number");
let kontolTusu=document.getElementById("btn");
let result=document.getElementById("result");
let rand= Math.round(Math.random()*10);
console.log(rand);


kontolTusu.addEventListener("click", ()=> {
    
let cevap= number.value;

if(cevap==""){
    
    result.innerText="0-10 ARASINDA BİR DEĞER GİRİNİZ"
    result.style.color="red"
    result.style.fontSize="2rem"
  
}else if(cevap>rand)
{ 
    result.innerText="Tahmin Edilen Sayı Tutulan Sayıdan BÜYÜK Yeniden Deneyiniz"
    result.style.color="red"
    result.style.fontSize="2rem"
}
    else if (cevap<rand){
    result.innerText="Tahmin Edilen Sayı Tutulan Sayıdan KÜÇÜK Yeniden Deneyiniz"
    result.style.color="red"
    result.style.fontSize="2rem"
}else{
    result.innerText= "🎉TEBRİKLER DOĞRU BİLDİNİZ🎉"
    result.style.color="red"
    result.style.fontSize="2rem"
}

number.focus();
number.value=""

});




