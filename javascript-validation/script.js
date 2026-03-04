function validateForm() {
    // 1. Fetching values from the HTML using DOM methods
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;

    // 2. Name validation: Check if empty
    if (name.trim() === "") {
        alert("Name must not be empty");
        return false;
    }

    // 3. Email validation: Check if empty (Basic check)
    if (email.trim() === "") {
        alert("Email must not be empty");
        return false;
    }

    // 4. Password validation: Check length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // 5. Mobile validation: Must be a number and exactly 10 digits
    if (isNaN(mobile) || mobile.trim().length !== 10) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    // If all checks pass
    alert("Form submitted successfully!");
    return true; 
}