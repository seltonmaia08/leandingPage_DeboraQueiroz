
//Menu Dropdown
const dropdown = document.querySelector('.dropdown');
const btn = document.querySelector('.dropdown-btn');

btn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// fecha ao clicar fora
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// fechar dropdown ao clicar em um link interno
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('active');
    });
});

// pegar o ano atual
const year = new Date();
const spanYear = document.querySelector('#year').textContent = year.getFullYear();


// Abrir i fechar menu de acessibilidade
const accessibility = document.querySelector('.accessibility');
const btnAccessibility = document.querySelector('.btn_accessibility');

btnAccessibility.addEventListener('click', () => {
    accessibility.classList.toggle('active');
});

// fecha ao clicar fora
document.addEventListener('click', (e) => {
    if (!accessibility.contains(e.target)) {
        accessibility.classList.remove('active');
    }
});

// aumentar e diminuir fonte
const aumentarFonte = document.querySelector("#aumentar-fonte");

aumentarFonte.addEventListener('click', (event) => {
    event.preventDefault();
    if (aumentarFonte.textContent === "Aa +") {
        aumentarFonte.innerHTML = 'Aa -';
        document.body.classList.add('fonte-grande');
    }
    else {
        aumentarFonte.innerHTML = 'Aa +';
        document.body.classList.remove('fonte-grande');

    }
})

// alternar o contraste

const imageAltoContraste = './assets/img/logo_v_negativa.svg';
const imageLogoHeader = './assets/img/logo_horizontal.svg'
const imageLogoFooter = './assets/img/logo_bg_pink.svg'

const logoHeader = document.querySelector('#logo-header');
const logoFooter = document.querySelector('#logo-footer');

const alternarContraste = document.querySelector('#contraste');
alternarContraste.addEventListener('click', (event) => {
    event.preventDefault();
    const altoContraste = document.body.classList.toggle('alto-contraste');
    
    if(altoContraste){
        logoHeader.src = `${imageAltoContraste}`
        logoFooter.src = `${imageAltoContraste}`
    } else {
        logoHeader.src = `${imageLogoHeader}`
        logoFooter.src = `${imageLogoFooter}`
    }
    
})

//clicar no logo do header e voltar pro topo

const home = document.getElementById("logo-header");
home.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Resposividade - menu

//Abrir menu
const menuToggle = document.querySelector('#open-menu')
const menuHamburger = document.querySelector('.menu-hamburger')
menuToggle.addEventListener("click", () => {
    console.log('Botão clicado')
    menuHamburger.classList.add('active')
})

//Fechar menu
const closeMenu = document.querySelector('.close-menu')
closeMenu.addEventListener('click', () => {
    menuHamburger.classList.remove('active')
})

//fechar menu ao clicar no link
const linkACloseMenu = document.querySelectorAll('.link-menu')
linkACloseMenu.forEach(link_a => {
    link_a.addEventListener('click', () => {
        menuHamburger.classList.remove('active')
    })

})

/*ALTERAÇÕES COM O JOHN*/

async function requisicao_fichas() {

    let requisicao = await fetch("https://raw.githubusercontent.com/john-sz/APIcoments/main/fichas.json");
    let dados_json = await requisicao.json();

    cartoes(dados_json);
}

requisicao_fichas();

let fichas = document.getElementById("fichas"); // é o container das fichas

function cartoes(dados) {

    for (let i = 0; i < dados.length; i++) {

        //criação de variáveis p/ cada cartão ----------------
        let nome = document.createElement("span");
        let responsavel = document.createElement("span");
        let idade = document.createElement("span");
        let imagem = document.createElement("img");
        let tratamento = document.createElement("span");
        let capacete = document.createElement("span");
        let observacoes = document.createElement("span");

        let cartao = document.createElement("span"); // é o container do cartão (imagem + informações)
        let informacoes = document.createElement("span"); // é o container das informações (textos)

        // atribuição de variáveis ----------------
        nome.textContent = dados[i].Bebe;
        idade.textContent = "Idade: " + dados[i].Idade;
        responsavel.textContent = "Responsável: " + dados[i].Responsavel;
        tratamento.textContent = "Tratamento realizado: " + dados[i].Tratamento;

        if(dados[i].Capacete) {capacete.textContent = "Capacete: necessário"}
        else {capacete.textContent = "Capacete: não necessário"}
        
        observacoes.textContent = "Observações: " +  dados[i].Observacoes;
        
        imagem.src = dados[i].Foto;

        // atribuição de classes ----------------
        cartao.classList.add("cartao");
        informacoes.classList.add("info_cartao");
        nome.classList.add("cartao_nome");
        observacoes.classList.add("cartao_observacao");
        imagem.classList.add("cartao_imagem");

        // colocando os itens nos containters, a imagem vem primeiro ----------------
        cartao.appendChild(imagem);
        
        informacoes.appendChild(nome);
        informacoes.appendChild(idade);
        informacoes.appendChild(responsavel);
        informacoes.appendChild(tratamento);
        informacoes.appendChild(capacete);
        informacoes.appendChild(observacoes);

        cartao.appendChild(informacoes);
        fichas.appendChild(cartao);
    }

    let cards = fichas.children;
    const clone = cards[0].cloneNode(true); // clonar o primeiro item para fazer loop infinito
    fichas.appendChild(clone);
}

/*DESLOCAMENTO DO CARROSSEL*/
let indice = 0

let avancar = document.getElementById("avancar");
let voltar = document.getElementById("voltar");

function alterarPosicao() {

    fichas.style.transform = `translateX(${-69.5 * indice}rem)`;
}

avancar.addEventListener("click", () => {

    indice += 1;
    fichas.style.transition = "transform 0.400s ease";
    alterarPosicao();

    if(indice === 20) {

        setTimeout(() => {
            
            fichas.style.transition = "none";
            indice = 0;
            alterarPosicao();

        }, 400);        
    }
})

voltar.addEventListener("click", () => {


    if(indice === 0) {

        fichas.style.transition = "none";
        indice = 20;
        alterarPosicao();
    }

    setTimeout(() => {
        
        indice -= 1;
        fichas.style.transition = "transform 0.4s ease";
        alterarPosicao();

    }, 10);
})

/*ALTERAÇÕES COM O JOHN*/