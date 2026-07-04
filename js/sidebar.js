// ================================
// Creator Nepal Sidebar
// ================================

const menuBtn = document.getElementById("menuBtn");
const commandCenter = document.getElementById("commandCenter");
const overlay = document.getElementById("overlay");

if (menuBtn && commandCenter && overlay) {

    menuBtn.onclick = function () {

        commandCenter.classList.add("show");
overlay.classList.add("show");

    };

    overlay.onclick = function () {

        commandCenter.classList.remove("show");
overlay.classList.remove("show");

    };

}

// ================================
// Load Logged In User
// ================================

const user = JSON.parse(localStorage.getItem("loggedInUser"));

const sidebarPhoto = document.getElementById("sidebarPhoto");
const sidebarName = document.getElementById("sidebarName");

if (sidebarPhoto && sidebarName) {

    if (user) {

        sidebarPhoto.src = user.profilePhoto;
        sidebarName.textContent = user.fullName;
        sidebarName.href = "pages/creator-dashboard.html";

    } else {

        sidebarPhoto.src = "images/default-profile.png";
        sidebarName.textContent = "Login";
        sidebarName.href = "pages/login.html";

    }

}

// ================================
// Logout
// ================================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.onclick = function (e) {

        e.preventDefault();

        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("isLoggedIn");

        alert("Logout Successfully");

        window.location.href = "index.html";

    };

}