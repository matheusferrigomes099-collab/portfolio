// MENSAGEM DE BOAS-VINDAS
window.onload = function () {
    alert("Bem-vindo ao portfólio de Matheus Ferri Gomes!");
};


// CONTADOR DE VISITAS
let visitas = localStorage.getItem("visitas");

if (visitas === null) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

localStorage.setItem("visitas", visitas);

console.log("Número de visitas:", visitas);


// FORMULÁRIO DE CONTATO
const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let assunto = document.getElementById("assunto").value.trim();
        let mensagem = document.getElementById("mensagem").value.trim();


        if (nome === "" || email === "" || assunto === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }


        if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um e-mail válido!");
            return;
        }


        alert("Mensagem enviada com sucesso, " + nome + "!");

        formulario.reset();

    });

}


// BOTÃO VOLTAR AO TOPO
const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);


botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "12px 16px";
botaoTopo.style.background = "#0f5132";
botaoTopo.style.color = "white";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.cursor = "pointer";


botaoTopo.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
