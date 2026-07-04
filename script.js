document.addEventListener("DOMContentLoaded", function () {
    const btnTopo = document.getElementById("btnTopo");
    window.onscroll = function () {
        exibirBotaoTopo();
    };
    function exibirBotaoTopo() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    }
    if (btnTopo) {
        btnTopo.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const form = document.getElementById("formContato");
    const divStatus = document.getElementById("mensagemStatus");
    if (form) {
        form.addEventListener("submit", function (evento) {
            evento.preventDefault(); 
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            divStatus.className = "status-msg";
            divStatus.style.display = "none";

            if (nome === "") {
                divStatus.textContent = "Erro: Por favor, preencha o seu nome.";
                divStatus.classList.add("erro");    
                divStatus.style.display = "block";
                return;
            }
            if (email === "" || !email.includes("@") || !email.includes(".")) {
                divStatus.textContent = "Erro: Digite um e-mail válido (ex: seuemail@teste.com).";
                divStatus.classList.add("erro");
                divStatus.style.display = "block";
                return;
            }
            if (mensagem.length < 10) {
                divStatus.textContent = "Erro: A mensagem precisa ter no mínimo 10 caracteres.";
                divStatus.classList.add("erro");
                divStatus.style.display = "block";
                return;
            }
            divStatus.textContent = "Sucesso! Sua mensagem foi enviada à equipe do Pink Chess.";
            divStatus.classList.add("sucesso");
            divStatus.style.display = "block";
            form.reset();
        });
    }
});
