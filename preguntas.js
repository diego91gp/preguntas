import {test} from "./test.js";
window.onload = function () {

  

    var nav = document.querySelector("nav");
    var sec = document.querySelector(".cuestionario");
    
    creaNav();
    function creaNav() {
        for (let categoria of test) {
            let div = document.createElement("div");
            let a = document.createElement("span");
            let imag = document.createElement("img");
            imag.src = `./media/${categoria.imagen}`;
            imag.alt = "Imagen de la categoria";
            a.textContent = categoria.categoria;
            div.appendChild(a);
            div.appendChild(imag);
            nav.appendChild(div);
            div.addEventListener("click", opcion);
    
        }
    }
    function opcion() {
        
        let h1 = document.createElement("h1");
        let imag = document.createElement("img");
        h1.textContent ="¿Qué sabes de "+this.textContent+"?";
        compruebaDom(h1);
        pintaNav();
        this.style.backgroundColor = "#DD401F";
        for (const cat of test) {
            
            if (cat.categoria == this.textContent) {
                
                
                imag.src = `./media/${cat.imagen}`;
                //h1.appendChild(imag);
                for (const [indice,preg] of cat.preguntas.entries()) {
                    let artic = document.createElement("article");
                    artic.style.backgroundImage = `url("./media/${cat.fondo}")`;
                    sec.appendChild(artic);
                    let h3 = document.createElement("h3");
                    h3.textContent = (indice+1) + ". " + preg.pregunta;
                    artic.appendChild(h3);
                    
                    
                    for (const [indiR,resp] of preg.respuestas.entries()) {
                        
                        let div = document.createElement("div");
                        div.classList.add("opcion");
                        let input = document.createElement("input");
                        input.type = preg.tipo == "simple" ? "radio" : "checkbox";
                        input.value = resp.correcta;
                        input.name = "res" + indice;
                        input.id = "res" + indice+ "" + indiR;
                        let label = document.createElement("label");
                        label.textContent = resp.respuesta;
                        label.setAttribute("for", input.id);
                        div.appendChild(input);
                        div.appendChild(label);
                        artic.appendChild(div);
                        
                        
                    }
                    
                }
                creaBoton();
            }
            
        }


       
        
        
    }
    
    function creaBoton(){
        
        if (!document.body.contains(document.getElementById("bot"))) {
            let boton = document.createElement("button");
            boton.setAttribute("id","bot")
            let resultados = document.createElement("div");
            boton.addEventListener("click", compruebaChek);
            boton.textContent = "Comprueba";
            resultados.appendChild(boton);
            document.body.appendChild(resultados);
        } 

    }

    function compruebaDom(h1) {
        document.body.firstElementChild.innerHTML="";
        document.body.firstElementChild.appendChild(h1);
        //Si body tiene mas de 5 hijos
        // if (sec.parentNode.childElementCount > 5) {
        //     sec.previousElementSibling.replaceWith(h1);
        //     sec.innerHTML = "";
        // }else sec.parentElement.insertBefore(h1, sec);
    }
    
    function compruebaChek() {
        for (let chek of document.querySelectorAll("input:checked")) chek.nextElementSibling.style.backgroundColor = chek.value ? "green" : "red";
        
    }
    
    function pintaNav(){
        for (const i of nav.children) {
            i.style.backgroundColor = " #DD401F";
        }
    }  
}



