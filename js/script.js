
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