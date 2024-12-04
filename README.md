# Random Password Generator

A simple and intuitive Random Password Generator built using **HTML**, **CSS**, and **JavaScript**. This tool generates secure, customizable passwords with a mix of uppercase letters, lowercase letters, numbers, and special characters.

---

## Features

- Generate passwords of customizable length (default: 12 characters).
- Includes at least one uppercase letter, one lowercase letter, one number, and one special character.
- Randomized order to ensure security.
- One-click copy functionality to copy passwords to the clipboard.
- Responsive and visually appealing design.

---

## Usage

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Click **"Generate Password"** to create a new random password.
4. Click **"Copy Password"** to copy the generated password to your clipboard.

---

## Code Structure

### **HTML**

- Provides the structure for the interface, including input fields and buttons.

### **CSS**

- Adds styling for an aesthetically pleasing and responsive design.

### **JavaScript**

- Implements password generation logic.
- Handles copying the password to the clipboard.

---

## How It Works

1. A pool of characters is created, including:
   - Uppercase letters (A-Z)
   - Lowercase letters (a-z)
   - Numbers (0-9)
   - Special characters (!@#$%^&\*)
2. The script ensures the password includes at least one character from each category.
3. Additional characters are randomly chosen to meet the desired length.
4. The password is shuffled to ensure randomness.

---

## File Structure

```
/project-folder
│
├── index.html       # HTML structure for the tool
├── style.css        # CSS for styling
└── script.js        # JavaScript logic for password generation
```

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.
