const form = document.getElementById('myForm');
const message = document.getElementById('message');
const deleteBtn = document.getElementById('deleteBtn');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(name==='' || email ==='' || password==='') {
        message.textContent='Lütfen gerekli alanları doldurunuz.'

    }
    else if(password.lenght <6){
        message.textContent='Password en az 6 karakterden oluşmalı.';
    }
    else{
        message.textContent='Form başarıyla gönderildi.';
        message.classList.remove('error');
        message.style.color='green';
        form.reset();   
    }


});

deleteBtn.addEventListener('click', ()=> {
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    message.textContent='From başarıyla temizlendi.';
    message.classList.remove('error');
    message.style.color='black';       
});
