
const $category=document.querySelectorAll(".cursos-category-item");
const $cursos=document.querySelectorAll(".cursos-card");

$category.forEach(function(e){
/*ACTIVANDO LA CLASE ACTIVE*/
    e.addEventListener("click",function(){
        for(let i=0;i<$category.length;i++){
            $category[i].classList.remove("active");
        }
        e.classList.add("active");

/*DESAPARECIENDO Y APARECIENDO SECCIONES CON EL ATRIBUTO SELECCIONADO */
        // $cursos.forEach(function(c){
        //     c.style.setProperty("display","none");
        //     if(c.dataset.category==e.textContent){
        //         c.style.setProperty("display","block")
        //     }
        //     if(e.dataset.category=="all"){
        //         c.style.setProperty("display","block")
        //     }

        // })
        $cursos.forEach(function(c){
            c.classList.add("disable");
            if(c.dataset.category==e.textContent){
                c.classList.remove("disable");
            }
            if(e.dataset.category=="all"){
                c.classList.remove("disable");
            }
        })
    })
})