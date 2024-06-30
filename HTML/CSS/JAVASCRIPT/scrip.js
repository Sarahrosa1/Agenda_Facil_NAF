document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const btnEntrar = document.getElementById('entrar');
    const btnCadastreSe = document.getElementById('cadastreSe');

    btnEntrar.addEventListener('click', function(event) {
        event.preventDefault();
        const usuario = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;
        
        alert(`Usuário: ${usuario}\nSenha: ${senha}`);
    });

    btnCadastreSe.addEventListener('click', function() {
        window.location.href = 'cadastro.html';
    });
});





