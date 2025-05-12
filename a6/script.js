function display() {
    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Display the values in the bottom line
    const output = document.getElementById("output");
    output.textContent = `Username: ${username}, Password: ${password}`;
}