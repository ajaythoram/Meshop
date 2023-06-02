
const f_name = document.getElementById("fname");
const l_name = document.getElementById("lname");
const save_btn = document.getElementById("btn_save");
let currUser = JSON.parse(localStorage.getItem("user"));
 
let userdata = JSON.parse(localStorage.getItem("data"));
let userData = data.filter((users)=>{
    return users.email=== currUser.email;
});
f_name.value = userData[0].f_name;
l_name.value=userData[0].l_name;