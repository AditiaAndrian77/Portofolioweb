/*=============== SHOW MENU ===============*/

// Mendapatkan elemen HTML dengan ID 'nav-menu', 'nav-toggle', dan 'nav-close'
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* Menu show */
// Jika elemen dengan ID 'nav-toggle' ada, tambahkan event listener untuk mendeteksi klik
if (navToggle) {
    navToggle.addEventListener("click", () => {
        // Menambahkan kelas 'show-menu' ke elemen dengan ID 'nav-menu'
        navMenu.classList.add("show-menu");
    });
}

/* Menu hidden */
// Jika elemen dengan ID 'nav-close' ada, tambahkan event listener untuk mendeteksi klik
if (navClose) {
    navClose.addEventListener("click", () => {
        // Menghapus kelas 'show-menu' dari elemen dengan ID 'nav-menu'
        navMenu.classList.remove("show-menu");
    });
}

/* Remove menu mobile */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    // Menghapus kelas 'show-menu' dari elemen dengan ID 'nav-menu'
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*   Sosial Icon   */

function showText(id) {
    // Mendapatkan semua elemen dengan kelas 'social-text'
    var texts = document.querySelectorAll(".social-text");

    // Iterasi setiap elemen dengan kelas 'social-text'
    texts.forEach(function (text) {
        // Jika ID elemen cocok dengan ID yang diberikan
        if (text.id === id) {
            // Mendapatkan elemen induk dari elemen teks
            var parent = text.parentElement;
            // Menambahkan atau menghapus kelas 'show-text' pada elemen induk
            parent.classList.toggle("show-text");
        } else {
            // Menghapus kelas 'show-text' dari elemen induk lainnya
            text.parentElement.classList.remove("show-text");
        }
    });
}

function showNotification() {
    Swal.fire({
        title: "Berhasil!",
        text: "CV sudah terdownload.",
        icon: "success",
        confirmButtonText: "OK"
    });
}

// EDUCATION// Function to open modal and show certificate
function openCertificate(certSrc) {
    var modal = document.getElementById("certificateModal");
    var img = document.getElementById("certImage");
    modal.style.display = "block";
    img.src = "assets/img/" + certSrc; // Path to the certificate image
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
function openCertificate(imageUrl1, imageUrl2) {
    const modal = document.getElementById("certificateModal");
    const certImage1 = document.getElementById("certImage1");
    const certImage2 = document.getElementById("certImage2");

    certImage1.src = imageUrl1;
    certImage2.src = imageUrl2;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

//Efek Scroll Project

/*contact*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload atau lompat
        event.stopPropagation(); // Mencegah ganggu event lain

        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
            .then(() => {
                showSuccessMessage();
                form.reset();
            })
            .catch(error => console.error("Error:", error));
    });

    function showSuccessMessage() {
        let messageBox = document.querySelector(".success-message");
        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.className = "success-message";
            messageBox.textContent = "Pesan berhasil terkirim!";
            document.body.appendChild(messageBox);
        }

        messageBox.classList.add("show");

        setTimeout(() => {
            messageBox.classList.remove("show");
        }, 3000);
    }
});