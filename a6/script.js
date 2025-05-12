function display() {
     
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const output = document.getElementById("output");
    output.textContent = `Username: ${username}, Password: ${password}`;
}