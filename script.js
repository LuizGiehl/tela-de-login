var botao = document.getElementById('botaologin')

botao.addEventListener('click', function enviar() {

    var usuario = document.getElementById('iusuario').value;
    let senha = document.getElementById('isenha').value;

    localStorage.setItem('nomeUsuario', usuario);
    let valor = localStorage.getItem('nomeUsuario');
    console.log(valor);

    if (usuario === '' || senha === '') {
        window.alert('POR FAVOR, DIGITE SEU USURÁIO E SENHA');
    }
    else{
        window.location.href = 'pag2.html';
    }

})