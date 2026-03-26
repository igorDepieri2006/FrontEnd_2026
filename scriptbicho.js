const cria = document.getElementById("b");
const corpo = document.getElementById("corpo");
const avatar = document.getElementById("avatar-img");
const toggleClima = document.getElementById("toggle-clima");

const imagens = {
    normal: "b_n.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    feliz: "b_a.png",
    fundoDia: "bg.png",
    fundoNoite: "b_f.png",

};

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;
let morto = false;
let horas = 0;

function controlador() {
    if (intervalo) clearInterval(intervalo);
    
    intervalo = setInterval(() => {
        if (morto) return;
        
        contador++;
        console.log("Tempo sem comer:", contador);

        if (contador >= 30) {
            cria.src = imagens.morto;
            avatar.src = imagens.morto;
            morto = true;
            console.log("O personagem morreu e não pode mais renascer.");
        }
    }, 1000);
}

function alimentar() {
    if (morto) return;{
        morto = false;
        contador = 0;
        controlador();
    }

    cria.src = imagens.comendo;
    contador = 0;

    if (time_out) clearTimeout(time_click);

    time_click = setTimeout(() => {
        if (!morto) {
            cria.src = imagens.feliz;
            avatar.src = imagens.feliz;

            time_click = setTimeout(() => {
                if (!morto) {
                    cria.src = imagens.normal;
                    avatar.src = imagens.normal;
                }
            }, 2000);
        }
    }, 1000);
}

function atualizarFundo() {
    setInterval(() => {
        horas++;
    
        if (!toggleClima.checked) {
            if (horas >= 12) {
                corpo.style.backgroundImage = `url('${imagens.fundoNoite}')`;
            } else {
                corpo.style.backgroundImage = `url('${imagens.fundoDia}')`;
            }
        }

        if (horas >= 24) horas = 0;
    }, 1000);
}

toggleClima.addEventListener('change', () => {

    if (toggleClima.checked) {
        corpo.style.backgroundImage = `url('${imagens.fundoNoite}')`;
    } else {
        corpo.style.backgroundImage = `url('${imagens.fundoDia}')`;
    }
});

const btnRevelar = document.getElementById("btn-revelar");
const containerFoto = document.getElementById("container-foto");

// A imagem que você quer mostrar
const imagemSurpresa = "fer.jpeg"; 

btnRevelar.addEventListener("click", () => {

    containerFoto.innerHTML = "";

    const img = document.createElement("img");
    img.src = imagemSurpresa;
    img.style.maxWidth = "200px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

    containerFoto.appendChild(img);

    btnRevelar.innerText = "Revelado!";
    btnRevelar.disabled = true;
});

controlador();
atualizarFundo();