let form = document.querySelector('#form');
let email = document.querySelector('#emailInput');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(email.value);
    alert(`hello ${email.value}`);
});
