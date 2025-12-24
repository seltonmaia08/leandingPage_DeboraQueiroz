// Adcionar background especial nas divs Relatos alternadamente
document.querySelectorAll('.relatos')
    .forEach((relato, index) => {
        if (index % 2 === 0) {
            relato.classList.add('bg_alternativo')
        }
    })

document.querySelector('body').animate