let bars = document.getElementById("bars");
let unList = document.getElementById("f-ul");
let language = document.getElementById("language");

bars.addEventListener('click' , function(){
    const list = unList.classList;
    const setLang = language.classList;

    var hasClass = unList.classList.contains('d-none');
    var checkClass = language.classList.contains('d-none');
    var disNon = bars.classList.contains('d-none');

    // bars.style.display = "none";
   if (hasClass){
    unList.classList.remove('d-none');
    unList.classList.add('clicked');
    unList.classList.add('ulStyle');
   }
   else{
    unList.classList.add('d-none');
    unList.classList.remove('clicked');
    unList.classList.remove('ulStyle');
   }

   if (checkClass){
    language.classList.remove('d-none');
    language.classList.add('clicked');
    language.classList.add('langStyle');
   }
   else{
    language.classList.add('d-none');
    language.classList.remove('clicked');
    language.classList.remove('langStyle');
   }
});