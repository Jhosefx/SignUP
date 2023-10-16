function setBodyClass() {
    const body = document.querySelector('body');
    if (window.innerWidth <= 768) {
      body.classList.add('small-screen');
    } else {
      body.classList.remove('small-screen');
    }
  }
  
  window.addEventListener('load', setBodyClass);
  window.addEventListener('resize', setBodyClass);

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("showPasswordButton");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Esconder Senha";
    } else {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Mostrar Senha";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.classList.add('animate__animated', 'animate__fadeInDown');
  });