window.onload = function () {

    var test = [
        {   "fondo":"url('./media/fondogeo.png')",
            "imagen":"./media/geo.png",
            "categoria": "geografia",
            "preguntas": [
                {
                    "tipo": "simple",
                    "pregunta": "¿Qué país tiene más habitantes?",
                    "respuestas": [
                        {
                            "respuesta": "EE.UU",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Rusia",
                            "correcta": ""
                        },
                        {
                            "respuesta": "China",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "India",
                            "correcta": ""
                        }
                    ]
                },
                {
                    "tipo": "simple",
                    "pregunta": "¿Cuál es la montaña más alta del mundo?",
                    "respuestas": [
                        {
                            "respuesta": "Everest",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "K2",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Pico Veleta",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Jaya",
                            "correcta": ""
                        }
                    ]
                },
                {
                    "tipo": "simple",
                    "pregunta": "¿Cuál es el río más largo del mundo?",
                    "respuestas": [
                        {
                            "respuesta": "Nalón",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Tajo",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Danubio",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Nilo",
                            "correcta": "si"
                        }
                    ]
                },
                {
                    "tipo": "multiple",
                    "pregunta": "¿Cuáles de estos paises pertenecen a Europa?",
                    "respuestas": [
                        {
                            "respuesta": "Francia",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "España",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "China",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Irak",
                            "correcta": ""
                        }
                    ]
                },
                {
                    "tipo": "multiple",
                    "pregunta": "¿Cuales de estos países no tienen ningún río?",
                    "respuestas": [
                        {
                            "respuesta": "Malta",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Holanda",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Qatar",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Francia",
                            "correcta": ""
                        }
                    ]
                },
                {
                    "tipo": "simple",
                    "pregunta": "¿Cuántos continentes existen?",
                    "respuestas": [
                        {
                            "respuesta": "6",
                            "correcta": ""
                        },
                        {
                            "respuesta": "7",
                            "correcta": ""
                        },
                        {
                            "respuesta": "4",
                            "correcta": ""
                        },
                        {
                            "respuesta": "5",
                            "correcta": "si"
                        }
                    ]
                },
                {
                    "tipo": "simple",
                    "pregunta": "¿Cuál es la ciudad más poblada del mundo?",
                    "respuestas": [
                        {
                            "respuesta": "Kioto",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Tokio",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Pekín",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Nueva York",
                            "correcta": ""
                        }
                    ]
                },
                {
                    "tipo": "simple",
                    "pregunta": "¿En qué continente se ubica Camboya?",
                    "respuestas": [
                        {
                            "respuesta": "Asia",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Oceania",
                            "correcta": ""
                        },
                        {
                            "respuesta": "America",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Africa",
                            "correcta": ""
                        }
                    ]
                },
                {
                    "tipo": "multiple",
                    "pregunta": "¿Cuáles de estas ciudades están en islas?",
                    "respuestas": [
                        {
                            "respuesta": "Tenerife",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Mallorca",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Pompeya",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Sevilla",
                            "correcta": ""
                        }
                    ]
                },
                {
                    "tipo": "simple",
                    "pregunta": "¿Cuál es es Pais mas pequeño?",
                    "respuestas": [
                        {
                            "respuesta": "Ciudad del Vaticano",
                            "correcta": "si"
                        },
                        {
                            "respuesta": "Andorra",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Suiza",
                            "correcta": ""
                        },
                        {
                            "respuesta": "Mexico",
                            "correcta": ""
                        }
                    ]
                }
            ]
        },/*hasta aqui 1*/
        {   "fondo":"url('./media/fondodep.webp')",
            "imagen":"./media/dep.png",
            "categoria": "deporte",
            "preguntas": [{
                "tipo": "simple",
                "pregunta": "¿Quién es el máximo goleador del FC Barcelona?",
                "respuestas": [
                    {
                        "respuesta": "Etoo",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Raul",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Cristiano Ronaldo",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Messi",
                        "correcta": "si"
                    }
                ]

            },
            {
                "tipo": "simple",
                "pregunta": "¿Qué tipo de competición es el Giro de Italia?",
                "respuestas": [
                    {
                        "respuesta": "Triatlon",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Ciclismo",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Formula 1",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Boxeo",
                        "correcta": ""
                    }
                ]
            },
            {
                "tipo": "multiple",
                "pregunta": "¿Cuáles de estos jugadores de NBA tienen mas de 4 anillos de campeon?",
                "respuestas": [
                    {
                        "respuesta": "Rudy Fernandez",
                        "correcta": ""
                    },
                    {
                        "respuesta": "LeBron James",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Stephen Curry",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Derrick Rose",
                        "correcta": ""
                    }
                ]
            },
            {
                "tipo": "simple",
                "pregunta": "¿Cómo se llama la anotación de un tanto en fútbol americano?",
                "respuestas": [
                    {
                        "respuesta": "Home Run",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Strike",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Puntazo",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Touchdown",
                        "correcta": "si"
                    }
                ]
            },
            {
                "tipo": "simple",
                "pregunta": "¿Cómo se llama el lugar donde se realizan las carreras de caballos?",
                "respuestas": [
                    {
                        "respuesta": "Pista",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Hipodromo",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Cancha",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Piscina",
                        "correcta": ""
                    }
                ]
            },
            {
                "tipo": "multiple",
                "pregunta": "¿Cuál de estos tenistas tienen mas de 20 Grand Slams?",
                "respuestas": [
                    {
                        "respuesta": "Rafael Nadal",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Andre Agassi",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Novak Djokovic",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Roger Federer",
                        "correcta": ""
                    }
                ]
            },
            {
                "tipo": "simple",
                "pregunta": "¿Qué significan las siglas ACB? ",
                "respuestas": [
                    {
                        "respuesta": "Asociacion de clubes de Badminton",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Asociacion de clubes de Baloncesto",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Autenticos Clubes de Bilbao",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Americanos con Barba",
                        "correcta": ""
                    }
                ]
            },
            {
                "tipo": "multiple",
                "pregunta": "¿Cuáles de estos colores pintan los anillos olímpicos? ",
                "respuestas": [
                    {
                        "respuesta": "Blanco",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Rosa",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Negro",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Marrón",
                        "correcta": ""
                    }
                ]
            },
            {
                "tipo": "simple",
                "pregunta": "¿En qué olimpiadas ganó la tenista Serena Williams su primer oro olímpico en individuales?",
                "respuestas": [
                    {
                        "respuesta": "Barcelona 92",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Grecia 2004",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Río de Janeiro 2016",
                        "correcta": ""
                    },
                    {
                        "respuesta": "Londres 2012",
                        "correcta": "si"
                    }
                ]
            },
            {
                "tipo": "multiple",
                "pregunta": "¿Qué 3 tipos de armas se utilizan en esgrima?",
                "respuestas": [
                    {
                        "respuesta": "Sable",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Espada",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Florete",
                        "correcta": "si"
                    },
                    {
                        "respuesta": "Navaja",
                        "correcta": ""
                    }
                ]
            }
            ]
        }/*hasta aqui 2*/



    ];

    // for (const i of test) {
    //     if (i.categoria == "geografia") {
    //         for (const x of i.preguntas) {
    //             if (x.tipo == "multiple") {
    //                 console.log(x.pregunta);
    //                 for (const z of x.respuestas) {
    //                     if (z.correcta) {
    //                         console.log(z.respuesta);
    //                     }

    //                 }
    //             }


    //         }
    //     }

    // }


    var nav = document.querySelector("nav");
    var sec = document.querySelector(".cuestionario");



    for (const n of test) {
        let div = document.createElement("div");
        let a = document.createElement("a");
        let imag= document.createElement("img");
        imag.src=n.imagen;
        a.href = "#";
        a.textContent = n.categoria;
        div.appendChild(a);
        div.appendChild(imag);
        nav.appendChild(div);
        a.addEventListener("click", opcion)
        //Crea nav


    }

    function opcion() {
        for (const i of nav.children) {
            i.style.backgroundColor=" rgb(161, 15, 27)";
        }
        this.parentElement.style.backgroundColor = "rgb(206, 18, 33)";
        
        
       
        sec.innerHTML="";
        let cont=1;
        let section = document.createElement("section");
        let h1 = document.createElement("h1");
        let imag= document.createElement("img");
        
        
        
        h1.textContent = this.textContent;
        
        section.appendChild(h1);
        
        for (const cat of test) {
            
            
            if (cat.categoria==this.textContent) {
                imag.src=cat.imagen;
                h1.appendChild(imag);
                for (const preg of cat.preguntas) {
                    let artic= document.createElement("article");
                    artic.style.backgroundImage=cat.fondo;
                    section.appendChild(artic);
                    
                    let h3=document.createElement("h3");
                    h3.textContent=cont+". "+preg.pregunta;
                    artic.appendChild(h3);
                    let contres=1;
                    
                    for (const resp of preg.respuestas) {
                        let div = document.createElement("div");
                        div.classList.add("opcion");
                        let input=document.createElement("input");
                        input.type=preg.tipo=="simple"?"radio":"checkbox";
                        input.name="res"+cont;
                        input.id="res"+cont+""+contres;
                        let label=document.createElement("label");
                        label.textContent=resp.respuesta;
                        label.setAttribute("for",input.id);
                        div.appendChild(input);
                        div.appendChild(label);
                        artic.appendChild(div);
                        contres++;
                        

                    }
                    cont++;
                }
            }
           
        }
       
        
        sec.appendChild(section);
        
        // for (let preg of n.preguntas) {


        // }



    }

    //Crea Titulo





}