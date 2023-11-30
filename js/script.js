const input = document.querySelectorAll('input')
const email = document.getElementById('mail')
const country = document.getElementById('country')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const confPassword = document.getElementById('confirm')
const span = document.querySelectorAll('span')
const submit = document.getElementById('submit')


const clearSpans = () => {
    span.forEach(span => {
        span.innerHTML = ''
    })
}

const checkInputs = (input, index) => {
    if (input.validity.valid) {
        span[index].textContent = ''
    }
    if (input.name === 'mail') {
        clearSpans()
        emailError()
    }
    if (input.name === 'password') {
        clearSpans()
        passwordError()
    }
    if (input.name === 'confirm') {
        clearSpans()
        confirmPasswordError()
    }
}

input.forEach((inp, index) => {
    inp.addEventListener('input', () => {
        checkInputs(inp, index)
    })
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (!email.validity.valid) {
        emailError()
    } else if (!password.validity.valid) {
        passwordError()
    } else if (!confPassword.validity.valid) {
        confirmPasswordError()
    } else {
        console.log('Congratulations');
    }
})

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
    }
}