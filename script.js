var botao = document.getElementById('botaologin')

botao.addEventListener('click', function enviar() {

    let usuario = document.getElementById('iusuario').value;
    let senha = document.getElementById('isenha').value;

    if (usuario === '' || senha === '') {
        window.alert('POR FAVOR, DIGITE SEU USURÁIO E SENHA');
    }
    else{
        window.location.href = 'pag2.html'
        window.alert('Sejá bem vindo: ' + usuario);
    }


})