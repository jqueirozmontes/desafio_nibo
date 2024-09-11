
function atualizarContador() {
    const dataAlvo = new Date('2024-09-12T23:59:59'); // Substitua pela sua data
    const agora = new Date();
    const totalSegundos = Math.floor((dataAlvo - agora) / 1000);

    const dias = Math.floor((totalSegundos % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
    const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / (60 * 60));
    const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
    const segundos = totalSegundos % 60;

    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
}

setInterval(atualizarContador, 1000); // Atualiza a cada minuto
atualizarContador(); // Chamada inicial
