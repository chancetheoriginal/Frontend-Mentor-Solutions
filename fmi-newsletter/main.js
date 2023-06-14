const secSuccess = document.getElementById('success');
const inputEmail = document.getElementById('form-email');
const btnDismiss = document.getElementById('btn-dismiss');

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    secSuccess.style.display = 'block';
    document.getElementById('subbed-email').textContent = inputEmail.value; 
})
btnDismiss.addEventListener('click', (e) => {
    secSuccess.style.display = 'none';
    inputEmail.value = '';
})