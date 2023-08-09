const pw1 = document.getElementById('password1');
const pw2 = document.getElementById('password2');
const checkbox = document.getElementById('terminos');
const form = document.querySelector('form')

console.log(pw1)
console.log(pw2)
console.log(checkbox)
console.log(form)


form.addEventListener('submit', (e) => {
    e.preventDefault();

    (validarContraseña() && validarCheckbox()) ? showAlertSuccess() : showAlertError()

});


function validarCheckbox() {
    return checkbox.checked
}

function validarContraseña() {
    return pw1.value === pw2.value;
}






function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}