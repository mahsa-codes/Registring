let user = localStorage.getItem("user");
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
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let user = localStorage.getItem(username);
    if(user) {
        let parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
            localStorage.setItem("user",JSON.stringify(parsedUser));
            window.location.href= "index.html";
        } else {
            alert ("Password is Incorrect");
        }
    } 
    else {
        alert("Username not found");
    }
});
