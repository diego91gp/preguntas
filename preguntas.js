import { test } from "./test.js";

window.onload = function () {

    let main = document.querySelector(".info");
    document.querySelector("#inicio").addEventListener("click", principal);
    let nav = document.querySelector("nav");
    let sec = document.querySelector(".cuestionario");
    let catActu = {};

    creaNav();

    function principal() {
        
        pintaNav();
        sec.innerHTML = "";
        if (document.querySelector(".resultados")) {
            document.querySelector(".resultados").remove();
        }

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
            div.addEventListener("click", () => { opcion(categoria, div) });
        }
    }
    function opcion(cat, divsel) {
        document.querySelector(".fondo").classList.replace(".fondo",".fondo2");
        catActu = cat;
        if (divsel) {
            pintaNav();
            divsel.style.pointerEvents = "none";
            divsel.style.backgroundColor = "#FDC300";
        }

        window.scrollTo(0, 0);
        if (document.querySelector(".resultados")) document.querySelector(".resultados").remove();
        let h1 = document.createElement("h1");
        let imag = document.createElement("img");
        h1.textContent = "¿Cuanto sabes de " + cat.categoria + "?";
        sec.innerHTML = "";
        sec.appendChild(h1);
        sec.setAttribute("id", cat.categoria);
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
            boton.textContent = "Corregir";
            resultados.appendChild(boton);
            sec.appendChild(resultados);
        }

    }
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
                    chek.nextElementSibling.style.border="solid 2px green";
                }
            }

            notaSuma = arr.filter(arr => arr.sel === 'bien').length / arr.filter(arr => arr.tipo === 'correcta').length;
            correcta = notaSuma === 1 ? correcta + 1 : correcta + 0;

            nota = nota + notaSuma - notaResta;

        }

        pintaNotas(correcta, incorrecta, nota);

    }
    function pintaNotas(correcta, incorrecta, nota) {
        window.scrollTo(0, 0);

        for (const lab of document.querySelectorAll("input")) {
            lab.disabled = "true";
        }

        let divresult = document.createElement("div");
        divresult.classList.add("resultados");
        divresult.style.bottom = "-452px";

        divresult.innerHTML = `<h3><i id="i2" class="fa-solid fa-arrow-up-from-bracket"></i>Resultados<i id="i1" class="fa-solid fa-minus"></i>
        </h3>
        <div id="resulquiz">
            <img src="./media/mascotamain.png" width="20%" alt="Quizzie">
            <div>
                <span> Aciertos: ${correcta}</span>
                <span> Fallos: ${incorrecta}</span>
                <span>Nota final</span>
                <span> ${Number(nota.toFixed(1)).toLocaleString("de-DE")} </span>
                <button id="botres">Volver  a intentar</button>
             </div>
        </div>
        `;

        document.querySelector("button").remove();
        document.querySelector(".fondo").appendChild(divresult);
        document.querySelector("#botres").addEventListener("click", () => { opcion(catActu) });
        divresult.querySelector("#i1").style.display = "none";
        divresult.querySelector("#i1").addEventListener("click", () => { mueve(divresult) });
        divresult.querySelector("#i2").addEventListener("click", () => { mueve(divresult) });
    }
    function mueve(divresult) {

        if (divresult.style.bottom == "-452px") {
            divresult.style.right = "25%";
            divresult.style.width = "50%";
           
            divresult.children[0].style.justifyContent = "space-between";
            divresult.style.bottom = "calc(50% - 200px)";
            document.body.querySelector("#i1").style.display = "inline-block";
            document.body.querySelector("#i2").style.display = "none";
        } else {
            divresult.style.right = "10px";
            divresult.style.bottom = "-452px";
            divresult.style.width = "255px";
            divresult.style.heigth = "35px";
            
            divresult.children[0].style.justifyContent = "space-around";
            document.body.querySelector("#i1").style.display = "none";
            document.body.querySelector("#i2").style.display = "inline-block";
        }

    }

    function pintaNav() {
        for (const i of nav.children) {
            i.style.pointerEvents = "auto";
            i.style.backgroundColor = " #1778A1";
        }
    }

}



