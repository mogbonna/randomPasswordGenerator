const passwordBox = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";
const allchars = uppercase + lowercase + number + symbol;

function generatePassword() {
  let password = "";

  // Ensure at least one character from each category
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Fill the rest of the password to meet the desired length
  while (password.length < length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }

  // Shuffle the password to make it more random
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  // Display the generated password
  passwordBox.value = password;
}

// function copyPassword() {
//   passwordBox.select();
//   document.execCommand("copy");
//   alert("Password copied to clipboard!");
// }
function copyPassword() {
  // Copy the password to the clipboard
  passwordBox.select();
  document.execCommand("copy");

  // Create a temporary alert message
  const alertMessage = document.createElement("div");
  alertMessage.textContent = "Password copied to clipboard!";
  alertMessage.style.position = "fixed";
  alertMessage.style.bottom = "20px";
  alertMessage.style.right = "20px";
  alertMessage.style.padding = "10px 20px";
  alertMessage.style.backgroundColor = "#4CAF50"; // Green background
  alertMessage.style.color = "#fff"; // White text
  alertMessage.style.borderRadius = "5px";
  alertMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  alertMessage.style.fontSize = "14px";
  alertMessage.style.zIndex = "1000";

  // Add the alert to the document
  document.body.appendChild(alertMessage);

  // Remove the alert after 3 seconds
  setTimeout(() => {
    document.body.removeChild(alertMessage);
  }, 3000); // 3000 ms = 3 seconds
}
