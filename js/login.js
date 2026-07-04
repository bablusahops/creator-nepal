// ===========================
// Creator Login
// ===========================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", function () {

        // User Input
        const username =
        document.getElementById("loginUsername").value.trim();

        const password =
        document.getElementById("loginPassword").value;

        const message =
        document.getElementById("loginMessage");

        // Saved Creator
        const creator =
        JSON.parse(localStorage.getItem("creatorData"));

        // No Account
        if (!creator) {

            message.style.color = "red";
            message.textContent = "No account found.";

            return;

        }

        // Username Wrong
        if (username !== creator.username) {

            message.style.color = "red";
            message.textContent = "Username not found.";

            return;

        }

        // Password Wrong
        if (password !== creator.password) {

            message.style.color = "red";
            message.textContent = "Incorrect password.";

            return;

        }

        // Login Success
       // Login Success

localStorage.setItem("isLoggedIn", "true");

localStorage.setItem(
    "loggedInUser",
    JSON.stringify(creator)
);

window.location.href = "creator-dashboard.html";

    });

}