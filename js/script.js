document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('DOMContentLoaded', function() {

    // --- MODAL INPUT NAMA ---
    const welcomeNameElement = document.getElementById('welcome-name');
    const modalOverlay = document.getElementById('name-modal-overlay');
    const nameInput = document.getElementById('modal-name-input');
    const submitBtn = document.getElementById('modal-submit-btn');

    const submitName = () => {
        const userName = nameInput.value.trim();
        welcomeNameElement.textContent = userName ? userName : "Guest";
        modalOverlay.style.display = 'none';
    };

    if (welcomeNameElement && modalOverlay && nameInput && submitBtn) {
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            welcomeNameElement.textContent = savedName;
            modalOverlay.style.display = 'none';
        } else {
            modalOverlay.style.display = 'flex';
            nameInput.focus();
        }
        
        submitBtn.addEventListener('click', () => {
            const userName = nameInput.value.trim();
            if (userName) {
                localStorage.setItem('userName', userName);
                welcomeNameElement.textContent = userName;
                modalOverlay.style.display = 'none';
            } else {
                welcomeNameElement.textContent = "Guest";
                modalOverlay.style.display = 'none';
            }
        });

        nameInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const userName = nameInput.value.trim();
                if (userName) {
                    localStorage.setItem('userName', userName);
                    welcomeNameElement.textContent = userName;
                    modalOverlay.style.display = 'none';
                } else {
                    welcomeNameElement.textContent = "Guest";
                    modalOverlay.style.display = 'none';
                }
            }
        });
    }

    // --- VALIDASI FORM DAN MENAMPILKAN HASIL ---
    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('nama').value;
            const dob = document.getElementById('tanggal-lahir').value;
            const genderElement = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('pesan').value;
            
            if (!name || !dob || !genderElement || !message) {
                alert('Semua kolom wajib diisi!');
                return;
            }
            
            const gender = genderElement.value;

            document.getElementById('output-name').textContent = name;
            document.getElementById('output-dob').textContent = dob;
            document.getElementById('output-gender').textContent = gender;
            document.getElementById('output-message').textContent = message;
            document.getElementById('output-time').textContent = new Date().toString();
            
            messageForm.reset();
        });
    }

    // --- HAMBURGER MENU ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // --- ANIMATE ON SCROLL INITIALIZATION ---
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });

    // --- BACK TO TOP BUTTON ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
    }

});