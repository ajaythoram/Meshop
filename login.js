
const login = document.getElementById("login_btn");
const form = document.getElementById("form");
login.addEventListener('click',(event)=>{
    const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;
const users = JSON.parse(localStorage.getItem('users')) || [];
const user = users.find(user => user.email === email && user.password === password);
 if(!user){
    alert('Incorrect email or Password');
    event.preventDefault();   
 }

})