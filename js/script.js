
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

//Slide
const section = document.querySelector('#apresentation');
const images = [
    './assets/img/debora_atendimento_1.png',
    './assets/img/debora_atendimento_2.png',
    './assets/img/debora_atendimento_3.png'
]
let index = 0
function trocarBgImage() {
  section.classList.remove('active')

  section.style.backgroundImage = `url(${images[index]})`

  section.classList.add('active')

  index = (index + 1) % images.length

  setTimeout(trocarBgImage, 5000)
}

trocarBgImage()
