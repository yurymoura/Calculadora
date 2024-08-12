function inserir(valor) {
    document.getElementById('display').value += valor;
}

function limpar() {
    document.getElementById('display').value = '';
}

function calcular() {
    try {
        const resultado = eval(document.getElementById('display').value);
        document.getElementById('display').value = resultado;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

// Adiciona um ouvinte para capturar as teclas pressionadas
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        // Se a tecla for um número ou ponto, insere no display
        inserir(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Se a tecla for um operador, insere no display
        inserir(key);
    } else if (key === 'Enter') {
        // Se a tecla for Enter, realiza o cálculo
        calcular();
    } else if (key === 'Backspace') {
        // Se a tecla for Backspace, apaga o último caractere
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        // Se a tecla for Escape, limpa o display
        limpar();
    }
});

function limpar() {
    document.getElementById('display').value = '';
}

function calcular() {
    try {
        const resultado = eval(document.getElementById('display').value);
        document.getElementById('display').value = resultado;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}