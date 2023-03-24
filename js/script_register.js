// When Register Button Clicked Verify Input Value
// => using Regular Expression For Email

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// show input error message
function errorInput(input, error_msg){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = error_msg;
}

// show success outline
function successMSG(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check if email is valid
function emailValidator(input){
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(input.value)){
        successMSG(input);
    }else{
        errorInput(input, 'You have entered an invalid email!');
    }
}

// check required fields
function requiredInputCheck(inputs){
    for(let input of inputs) {
        if(input.value === ''){
            errorInput(input, `${getFieldName(input)} is required`);
        }else{
            successMSG(input);
        }
    }
}

// Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check input length
function inputLength(input, min, max){
    str = input.value;
    if(!(str.length >= min && str.length <= max) && str !== ''){
        errorInput(input,`${getFieldName(input)} length between [${min} - ${max}]`)
    }/*else{
        return true;
    }*/
}

//check if Password 1 & Password 2 are the same
function checkPasswords1_2(pass1, pass2){
    if(pass1.value=== pass2.value){
    }else{
        errorInput(pass2, 'Password do not match');
    }
}



// event listeners
form.addEventListener('submit', e =>{
    e.preventDefault();

    // === to compare type && value in same time
    requiredInputCheck([username, email, password1, password2]);
    inputLength(username, 6, 15);

    // if email length is between [10 .. 30 ] than  Check Email Validation
    if( 10 >= email.value.length <= 30 ){
        emailValidator(email);
    }
    
    inputLength(email, 10, 30);
    inputLength(password1, 8, 15);
    inputLength(password2, 8, 15);
    checkPasswords1_2(password1, password2);
});