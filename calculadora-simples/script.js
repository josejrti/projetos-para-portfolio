function AdicionarCaractere(value) {
    document.getElementById('calc-display').value += value
}

function ApagarDisplay() {
    document.getElementById('calc-display').value = ''
}

function ApagarCaractere () {
    const display = document.getElementById('calc-display')
    display.value = display.value.slice(0, -1)
}

function Calcular() {
    const display = document.getElementById('calc-display')
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Erro'
    }
}

