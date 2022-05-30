const pass = document.querySelector('#pass');
const pass2 = document.querySelector('#pass2');
const passError = document.querySelector('.error');
const button = document.querySelector("button");



pass.addEventListener('blur', getPass);
pass2.addEventListener('input', checkPasswords);
let password;

function getPass(e) {
  if (e.target.value.length > 0) {
    console.log(e.target.value);
    password = e.target.value;
  }
}

function checkPasswords(e) {
  if (e.target.value.length > 0) {
    console.log(e.target.value);
    if (e.target.value === password) {
      console.log('yya');
      passError.innerHTML = '&nbsp;';
      passError.className = 'error';
      button.disabled = false;
    }
    else {
      showError();
    }
  }
}

function showError() {
  passError.textContent = '*Passwords do not match';
  button.disabled = true;
}