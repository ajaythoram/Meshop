
const sign_up = document.getElementById("Sign_up");
 
sign_up.addEventListener('click',(event)=>{
  
  const first_name = document.getElementById("first_name").value;
const last_name = document.getElementById("last_name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("pass").value;
const repassword = document.getElementById("repass").value;

    if(password.value != repassword.value){
        alert("passowrd not match");
        event.preventDefault();
    }
    const users = JSON.parse(localStorage.getItem('users'))||[];
  const userexist = users.some(user =>user.email===email);
  if(userexist){
    alert('User alredy exists');
    return;
  }
  users.push({first_name,last_name,email,password});
  localStorage.setItem('users',JSON.stringify(users));  
});
