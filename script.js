const user = localStorage.getItem("user");
if(user) {
    let parsedUser =JSON.parse("user");
    document.getElementById('welcome').innerHTML = `Hello ${parsedUser}`;
    document.getElementById('logoutBtn').classList.remove('.hidden');
} else {
    document.getElementById('welcome').innerHTML = `Hello Please <a href='login.html' >login</a>`
}

document.getElementById('logoutBtn').addEventListener('click', function(){
    localStorage.removeItem("user");
    window.location.href = "login.html"
})