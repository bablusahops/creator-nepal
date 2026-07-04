// ==========================================
// Creator Nepal
// Signup Form
// ==========================================

// Form
const creatorForm = document.getElementById("creatorForm");
console.log(creatorForm);

// Check Form Exists
if (creatorForm) {

    creatorForm.addEventListener("submit", function (e) {

        // Stop Form Refresh
        e.preventDefault();

        // Get Values
        // Get Values
const fullName = document.getElementById("fullName").value;
const gender = document.getElementById("gender").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const birthDate = document.getElementById("birthDate").value;
const category = document.getElementById("category").value;
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const country = document.getElementById("country").value;
const bio = document.getElementById("bio").value;
        // Profile Photo
        const profilePhoto = document.getElementById("previewImage").src;
        console.log(fullName);
console.log(username);
console.log(category);
console.log(country);

        // Save Data
        const creatorData = {

            fullName,
            gender,
            email,
            phone,
            birthDate,
            category,
            username,
            password,
            country,
            bio,
            profilePhoto

        };

        // Save in Browser
        localStorage.setItem(

            "creatorData",

            JSON.stringify(creatorData)

        );

        // Success Message
        alert("Account Created Successfully!");

        // Open Dashboard
        window.location.href = "creator-dashboard.html";

    });

}