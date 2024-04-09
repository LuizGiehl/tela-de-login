var voltar = document.getElementById('voltar');
var nomeUsuario = localStorage.getItem('nomeUsuario');
console.log(nomeUsuario);

document.getElementById('bem-vindo').innerHTML = `Sejá Bem Vindo <br> ${nomeUsuario}`;

voltar.addEventListener('click', function voltar() {
    window.location.href = 'index.html';
})