document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evitar que la página se recargue

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Datos de usuarios simulados
    const usuarios = [
        { username: 'admin', password: '1234' },
        { username: 'user', password: 'abcd' }
    ];

    // Simular autenticación local
    const usuarioAutenticado = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioAutenticado) {
        // Redirigir al dashboard si la autenticación es exitosa
        alert('Login successful!');
        window.location.href = '/index.html';
    } else {
        // Mostrar mensaje de error si la autenticación falla
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
