function register() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    fetch("https://localhost:3000/register", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({name,email,password})
    })
    .then(res => res.text())
    .then(data => {
        alert(data)
        loadUsers()
    })
}
function loadUsers() {
    fetch("https://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
        let output = ""
        data.forEach(user => {
            output += `<li>${user.name} - ${user.email}<li>`
        })
        document.getElementById("list").innerHTML = output
    })
}
loadUsers()