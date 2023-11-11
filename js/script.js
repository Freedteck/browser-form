const input = document.querySelectorAll('input')
const email = document.getElementById('mail')
const country = document.getElementById('country')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const confPassword = document.getElementById('confirm')
const span = document.querySelectorAll('span')

input.forEach((inp, index) => {
    inp.addEventListener('input', () => {
        if (inp.validity.valid) {
            span[index].textContent = ''
        } else if (inp.name === 'mail') {
            emailError()
        } else if (inp.name === 'password') {
            passwordError()
        } else if (inp.name === 'confirm') {
            confirmPasswordError()
        }
    })
})
// email.addEventListener('input', () => {
//     if (email.validity.valid) {
//         span[0].textContent = ''
//     }
//     showError()
// })
// password.addEventListener('input', () => {
//     if (password.validity.valid) {
//         span[3].textContent = ''
//     }
//     showError()
// })
// confPassword.addEventListener('input', () => {
//     if (confPassword.validity.valid) {
//         span[4].textContent = ''
//     }
//     showError()
// })

function emailError() {

    if (email.validity.valueMissing) {
        span[0].textContent = 'Field canot be Empty'
    } else if (email.validity.typeMismatch) {
        span[0].textContent = 'email address is expected'
    }
}
function passwordError() {

    if (password.validity.valueMissing) {
        span[2].textContent = 'Field canot be Empty'
    } else if (password.validity.tooShort) {
        span[2].textContent = 'password must be at least 8 characters'
    }
}
function confirmPasswordError() {
    if (confPassword.value !== password.value) {
        span[3].textContent = 'password not match'
        console.log(confPassword.value, password.value);
    }
}