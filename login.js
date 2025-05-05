document.getElementById('submitt').addEventListener('click' ,function (){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let correctEmail = 'mkk007sa@gmail.com';
    let correctPass = '1234567';

    if(email === correctEmail && password === correctPass){
        alert('successfuly logged in');
    }else {
        alert('incorrect email or password');
    };

});