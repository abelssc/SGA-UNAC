
// ===================================================================================
//                                  MENU
// ===================================================================================
//--Icono Menu
const $nav=document.querySelector(".navigation");
const $toggle=document.querySelector(".toggle");
function toggleMenu(){  
    $nav.classList.toggle("active");
    $toggle.classList.toggle("active");
}
//--Acordion de lista
const $accordion=document.querySelector(".accordion");
$accordion.addEventListener("click",function(){
    this.classList.toggle("active");
})
//--Activando una clase selected para añadir un bg
const $list=document.querySelectorAll(".navigation>ul>li:not(.accordion-child)");
for(let i=0;i<$list.length;i++){
    $list[i].addEventListener("click",function(){
        for(let j=0;j<$list.length;j++){
            $list[j].classList.remove("selected")
        }
        this.classList.toggle("selected");
        })
}
//Activando una clase selected para añadir un bg a los acordiones
const $accordionList=document.querySelectorAll(".accordion-child>ul>li");
for(let i=0;i<$accordionList.length;i++){
    $accordionList[i].addEventListener("click",function(){
        for(let j=0;j<$list.length;j++){
            $accordionList[j].classList.remove("selected")
        }
        this.classList.toggle("selected");
        })
}
