const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)){
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else if(str==null)
    {
      phone.classList.add('is-innvalid');
      validPhone = false;
    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }



})