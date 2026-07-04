// ==========================================
// Creator Nepal
// File : cropper.js
// Photo Upload & Crop
// ==========================================

// ===============================
// Get Required Elements
// ===============================

const profilePhoto = document.getElementById("profilePhoto");
const previewImage = document.getElementById("previewImage");
const plusIcon = document.getElementById("plusIcon");

const cropModal = document.getElementById("cropModal");
const cropImage = document.getElementById("cropImage");

const cropSave = document.getElementById("cropSave");
const cropCancel = document.getElementById("cropCancel");

// Cropper Object
let cropper = null;

// ===============================
// Check Required Elements
// ===============================

if (
    profilePhoto &&
    previewImage &&
    plusIcon &&
    cropModal &&
    cropImage &&
    cropSave &&
    cropCancel
) {

    // ===============================
    // Select Image
    // ===============================

    profilePhoto.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            // Image Show
            cropImage.src = e.target.result;

            // Open Modal
            cropModal.classList.add("show");

            // Wait Image Load
            cropImage.onload = function () {

                // Destroy Previous Cropper
                if (cropper) {

                    cropper.destroy();

                }

                // Create New Cropper
                cropper = new Cropper(cropImage, {

                    aspectRatio: 1,

                    viewMode: 1,

                    dragMode: "move",

                    autoCropArea: 1,

                    responsive: true,

                    background: false,

                    movable: true,

                    zoomable: true,

                    cropBoxMovable: true,

                    cropBoxResizable: true

                });

            };

        };

        reader.readAsDataURL(file);

    });

}
// ==========================================
// Creator Nepal
// Crop & Save
// ==========================================

cropSave.addEventListener("click", function () {

    // अगर Cropper मौजूद नहीं है
    if (!cropper) return;

    // Cropped Image बनाओ
    const canvas = cropper.getCroppedCanvas({

        width: 300,
        height: 300,
        imageSmoothingQuality: "high"

    });

    // Preview में दिखाओ
    previewImage.src = canvas.toDataURL("image/png");

    // Image Show
    previewImage.style.display = "block";

    // Plus Icon Hide
    plusIcon.style.display = "none";

    // Modal Close
    cropModal.classList.remove("show");

    // Cropper Destroy
    cropper.destroy();

    cropper = null;

    // File Input Reset
    profilePhoto.value = "";

});


// ==========================================
// Creator Nepal
// Cancel Crop
// ==========================================

cropCancel.addEventListener("click", function () {

    // Modal Close
    cropModal.classList.remove("show");

    // Cropper Remove
    if (cropper) {

        cropper.destroy();

        cropper = null;

    }

    // File Input Reset
    profilePhoto.value = "";

});