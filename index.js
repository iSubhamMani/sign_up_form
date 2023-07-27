const pwdField = document.querySelector('.pwd_field');
const cpwdField = document.querySelector('.cpwd_field');
const cpwdInfo = document.querySelector('.cpwd-info');

cpwdField.addEventListener('input', () => {
    validatePassword();
});

pwdField.addEventListener('input', () => {
    validatePassword();
});

function validatePassword(){
    if(pwdField.value !== ''){
        if(cpwdField.value === pwdField.value){
            // valid

            cpwdInfo.classList.remove('invalid');
            cpwdInfo.classList.add('valid');

            cpwdField.setCustomValidity('');
        }
        else{
            //invalid

            cpwdInfo.classList.add('invalid');
            cpwdInfo.classList.remove('valid');

            cpwdField.setCustomValidity("Password doesn't match");
        }
    }
    else{
        //invalid

        cpwdInfo.classList.add('invalid');
        cpwdInfo.classList.remove('valid');
    }
}
