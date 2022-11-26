import { test } from "./test.js";
window.onload = function () {

    let main = document.querySelector(".info");
    main.parentElement.previousElementSibling.previousElementSibling.firstElementChild.addEventListener("click", principal);
    var nav = document.querySelector("nav");
    var sec = document.querySelector(".cuestionario");

    creaNav();

    function principal() {
        sec.innerHTML = "";
        sec.appendChild(main);

    }
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

        if (document.querySelector(".resultados")) document.querySelector(".resultados").remove();
        let h1 = document.createElement("h1");
        let imag = document.createElement("img");
        h1.textContent = "¿Cuanto sabes de " + this.textContent + "?";
        sec.innerHTML = "";
        sec.appendChild(h1);
        pintaNav();
        this.style.backgroundColor = "#FDC300";
        for (const cat of test) {

            if (cat.categoria == this.textContent) {


                imag.src = `./media/${cat.imagen}`;
                h1.appendChild(imag);
                for (const [indice, preg] of cat.preguntas.entries()) {
                    let divh = document.createElement("section");
                    let imagenTipo = document.createElement("img");
                    imagenTipo.src = preg.tipo == "simple" ? "./media/mascotaUnica.png" : "./media/mascotaMultiple.png";
                    let artic = document.createElement("article");
                    artic.style.backgroundImage = `url("./media/${cat.fondo}")`;
                    sec.appendChild(artic);
                    let h3 = document.createElement("h3");
                    h3.textContent = (indice + 1) + ". " + preg.pregunta;
                    artic.appendChild(divh);
                    divh.appendChild(h3);
                    divh.appendChild(imagenTipo);

                    creaInputs(preg, indice, artic);

                }
                creaBoton();
            }

        }





    }
    //checked
    function creaInputs(preg, indice, artic) {
        for (const [indiR, resp] of preg.respuestas.entries()) {

            let div = document.createElement("div");

            div.classList.add("opcion");
            let input = document.createElement("input");
            input.type = preg.tipo == "simple" ? "radio" : "checkbox";

            input.value = resp.correcta;
            input.name = "res" + indice;
            input.id = "res" + indice + "" + indiR;
            let label = document.createElement("label");
            label.textContent = resp.respuesta;
            label.setAttribute("for", input.id);
            div.appendChild(input);
            div.appendChild(label);
            artic.appendChild(div);


        }
    }

    function creaBoton() {

        if (!document.body.contains(document.getElementById("bot"))) {
            let boton = document.createElement("button");
            boton.setAttribute("id", "bot")
            let resultados = document.createElement("div");
            boton.addEventListener("click", compruebaChek);
            boton.textContent = "Comprueba";
            resultados.appendChild(boton);
            sec.appendChild(resultados);
        }

    }


    //funcion para repetir las qué falle
    function compruebaChek() {
        let correcta = 0, incorrecta = 0, nota = 0;

        for (let ar of sec.querySelectorAll("article")) {
            let arr = [];
            let notaSuma = 0, notaResta = 0;
            for (let chek of ar.querySelectorAll("input")) {

                if (chek.value && chek.checked) {
                    arr.push({ "tipo": "correcta", "sel": "bien" });

                    chek.nextElementSibling.style.backgroundColor = "#4EBF7D";
                    notaSuma++;
                    chek.nextElementSibling.innerHTML += `<img src="./media/mascotaOK.png"  alt="bien">`;

                }
                if (!chek.value && chek.checked) {
                    incorrecta++;
                    arr.push({ "tipo": "incorrecta", "sel": "mal" });
                    notaResta = notaResta + 0.15;
                    chek.nextElementSibling.style.backgroundColor = "#DD401F";
                    chek.nextElementSibling.innerHTML += `<img src="./media/mascotaNO.png"  alt="mal">`;
                }
                if (chek.value && !chek.checked) {
                    arr.push({ "tipo": "correcta" });

                    chek.nextElementSibling.style.backgroundColor = "#FDC300";
                    chek.nextElementSibling.style.color = "green";
                }
            }

            notaSuma = arr.filter(arr => arr.sel === 'bien').length / arr.filter(arr => arr.tipo === 'correcta').length;
            correcta = arr.filter(arr => arr.sel === 'bien').length === 1 ? correcta + 1 : correcta + 0;

            nota = nota + notaSuma - notaResta;

        }
        window.scroll(0, 0);
        pintaNotas(correcta, incorrecta, nota);

    }

    function pintaNotas(correcta, incorrecta, nota) {

        for (const lab of document.querySelectorAll("input")) {
            lab.disabled = "true";
        }

        let divresult = document.createElement("div");
        divresult.classList.add("resultados");
        function mueve() {
            divresult.style.right = "15%";
            divresult.style.width = "70%";
            divresult.style.bottom = "calc(50% - 200px)";
            document.body.querySelector("i").style.display = "inline-block";

        }

        function minimiza() {
            divresult.style.right = "10px";
            divresult.style.bottom = "-454px";
            divresult.style.width = "240px";
            document.body.querySelector("i").style.display = "none";
        }
        //<i class="fa-regular fa-square-arrow-up-left"></i>
        divresult.innerHTML = `<h3>Resultados <i class="fa-solid fa-minus"></i>
</h3>
                               <span> Preguntas acertadas: ${correcta}</span>
                               <span> Preguntas falladas: ${incorrecta}</span>
                                <span>Nota final: ${nota.toFixed(2)} </span> `;

        //cambiar el addeventlistener pa q saque los resultados y moverlo de sitio al naV
        if (nota != 10) {
            divresult.innerHTML += `<button>Volver  a intentar</button>`;
        }

        let d = document.querySelector("button");
        d.removeEventListener("click", compruebaChek);
        d.textContent = "Mostrar Result";
        d.addEventListener("click", mueve);
        document.body.insertBefore(divresult, sec);
        document.body.querySelector("i").addEventListener("click", minimiza);

    }

    function pintaNav() {
        for (const i of nav.children) {
            i.style.backgroundColor = " #1778A1";
        }
    }


}
