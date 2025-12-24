// Adcionar background especial nas divs Relatos alternadamente
// document.querySelectorAll('.relatos')
//     .forEach((relato, index) => {
//         if (index % 2 === 0) {
//             relato.classList.add('bg_alternativo')
//         }
//     })

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