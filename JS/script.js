const menuBtn = document.getElementById("menuBtn");
const commandCenter = document.getElementById("commandCenter");
const overlay = document.getElementById("overlay");

// केवल तब Event लगाओ जब Elements मौजूद हों
if (menuBtn && commandCenter && overlay) {

    menuBtn.addEventListener("click", () => {

        commandCenter.classList.add("show");
        overlay.classList.add("show");

    });

    overlay.addEventListener("click", () => {

        commandCenter.classList.remove("show");
        overlay.classList.remove("show");

    });

}
// ==========================
// Load Logged-in Creator
// ==========================

// ==========================
// Sidebar User
// ==========================

const user = JSON.parse(localStorage.getItem("loggedInUser"));

const sidebarName = document.getElementById("sidebarName");
const sidebarPhoto = document.getElementById("sidebarPhoto");

if (user) {

    sidebarName.textContent = user.fullName;
    sidebarPhoto.src = user.profilePhoto;

} else {

    sidebarName.textContent = "Login";
    sidebarPhoto.src = "../IMAGES/default-profile.png";

}
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function(e) {

        e.preventDefault();

        // सिर्फ Login हटाओ
        localStorage.removeItem("loggedInUser");

        // Home Page खोलो
        window.location.href = "../index.html";

    });

}