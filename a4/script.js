document.addEventListener("DOMContentLoaded", () => {
  let str = "";
  for (let i = 1; i <= 31; i++) { // Loop from 1 to 31 for days
    str = str + `<option>${i}</option>`;
  }
  document.getElementById("n1").innerHTML = str; // Populate the day dropdown

  let monthStr = "";
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  months.forEach(month => {
    monthStr += `<option>${month}</option>`;
  });
  document.getElementById("month").innerHTML = monthStr; // Populate the month dropdown

  let yearStr = "";
  for (let i = 1900; i <= 2025; i++) { // Loop from 1900 to 2025
    yearStr += `<option>${i}</option>`;
  }
  document.getElementById("year").innerHTML = yearStr; // Populate the year dropdown
});