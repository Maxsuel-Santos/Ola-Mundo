let area = document.getElementById('area')

function mover() {
    area.style.background = 'blue'
    area.style.color = 'black'
    area.innerText = 'O mouse está aqui!'
}

function clicar() {
    area.style.background = 'red'
    area.style.color = 'green'
    area.innerText = 'Você clicou!'
}

function saiu() {
    area.style.color = 'yellow'
    area.style.background = 'black'
    area.innerText = 'O mouse saiu!'
}