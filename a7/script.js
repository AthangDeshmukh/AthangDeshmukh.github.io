const addNumbers = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

     
    const sum = num1 + num2;

    
    const output = document.getElementById("output");
    output.textContent = `Sum: ${sum}`;
}