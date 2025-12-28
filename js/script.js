
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

// add icones de estrelas nos relatos
const icons = document.querySelectorAll(".icon")
icons.forEach(container => {
    for (let i = 0; i < 5; i++) {
        const iconStar = document.createElement('i')
        iconStar.classList.add('bi', 'bi-star-fill', 'star')
        container.appendChild(iconStar)
    }
})

// pegar o ano atual

const year = new Date()
const spanYear = document.querySelector('#year').textContent = year.getFullYear()
