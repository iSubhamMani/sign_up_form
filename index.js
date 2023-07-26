const pwdField = document.querySelector('.pwd_field');
const cpwdField = document.querySelector('.cpwd_field');
const cpwdInfo = document.querySelector('.cpwd-info');

cpwdField.addEventListener('input', () => {
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
});

pwdField.addEventListener('input', () => {
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
});
