// ==========================================
// Creator Dashboard
// Load Creator Data
// ==========================================

// Browser से Data लो
const creatorData = JSON.parse(localStorage.getItem("creatorData"));

// अगर Data मौजूद है
if (creatorData) {

    // Profile Photo
    if (creatorData.profilePhoto) {

        document.getElementById("dashboardPhoto").src =
        creatorData.profilePhoto;

    }

    // Full Name
    document.getElementById("dashboardName").textContent =
    creatorData.fullName;

    // Username
    document.getElementById("dashboardUsername").textContent =
    "@" + creatorData.username;

    // Category
    document.getElementById("dashboardCategory").textContent =
    creatorData.category;

    // Country
    document.getElementById("dashboardCountry").textContent =
    creatorData.country;

}
// Bio

document.getElementById("dashboardBio").textContent =
creatorData.bio;