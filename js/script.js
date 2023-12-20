const input = document.querySelectorAll('input')
const email = document.getElementById('mail')
const country = document.getElementById('country')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const confPassword = document.getElementById('confirm')
const span = document.querySelectorAll('span')
const success = document.querySelector('h3')
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
    if (input.name === 'zip') {
        clearSpans()
        checkZip()
    }
}

input.forEach((inp, index) => {
    inp.addEventListener('input', () => {
        checkInputs(inp, index)
    })
})

country.addEventListener('change', checkZip);

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (!email.validity.valid) {
        emailError()
    } else if (!zip.validity.valid) {
        checkZip()
    } else if (!password.validity.valid) {
        passwordError()
    } else if (!confPassword.validity.valid) {
        confirmPasswordError()
    } else {
        success.textContent = 'Congratulations, You have submitted your form Successfully 👍';
        email.value = ''
        password.value = ''
        confPassword.value = ''
        country.value = 'NG'
        zip.value = ''
    }
})

function emailError() {
    if (email.validity.valueMissing) {
        email.setCustomValidity("invalid")
        span[0].textContent = 'Field canot be Empty'
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity("invalid")
        span[0].textContent = 'email address is expected'
    } else {
        email.setCustomValidity("")
    }
}

function checkZip() {
    const countryVal = country.value
    const zipCodes = {
        "NG": ["^(NG-)?\\d{5}$", "Nigeria ZIPs must have exactly 5 digits: e.g. NG-19507 or 19507"],
        "US": ["^(US-)?\\d{6}$", "USA ZIPs must have exactly 6 digits: e.g. US-195770 or 195770"],
        "GH": ["^(GH-)?\\d{4}$", "Ghana ZIPs must have exactly 4 digits: e.g. GH-1950 or 1950"],
        "FR": ["^(FR-)?\\d{5}$", "France ZIPs must have exactly 5 digits: e.g. FR-11950 or 11950"],
    }
    
    if (zip.validity.valueMissing) {
        zip.setCustomValidity("invalid")
        span[1].textContent = 'Field canot be Empty'
    } else if (!zip.value.match(zipCodes[countryVal][0])) {
        zip.setCustomValidity("invalid")
        span[1].textContent = zipCodes[countryVal][1]
    } else {
        zip.setCustomValidity("")
        span[1].textContent = ''
    }
}

function passwordError() {
    if (password.validity.valueMissing) {
        password.setCustomValidity("invalid")
        span[2].textContent = 'Field canot be Empty'       
    } else if (password.validity.tooShort) {
        password.setCustomValidity("invalid")
        span[2].textContent = 'password must be at least 8 characters'
    } else {
        password.setCustomValidity("")
    }
}

function confirmPasswordError() {
    if (confPassword.value !== password.value) {
        confPassword.setCustomValidity("invalid")
        console.log(confPassword.validity.valid)
        span[3].textContent = 'password not match'
    } else {
        confPassword.setCustomValidity("")
    }
}
