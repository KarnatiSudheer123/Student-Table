let students = JSON.parse(localStorage.getItem("students")) || [];
function addStudents() {
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;
    if(name === "" || marks ==="") {
        alert("Enter all fields");
        return;
    }
    students.push({name, marks});
    localStorage.setItem("students",JSON.stringify(students));
    displayStudents();
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}
function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";
    students.forEach(students => {
        let row = `<tr>
        <td>${students.name}<td>
        <td>${students.marks}<td>
        </tr>`;
        table.innerHTML += row;
    });
}
displayStudents();