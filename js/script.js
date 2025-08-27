document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('DOMContentLoaded', function() {

    // --- MODAL INPUT NAMA ---
    const welcomeNameElement = document.getElementById('welcome-name');
    const modalOverlay = document.getElementById('name-modal-overlay');
    const nameInput = document.getElementById('modal-name-input');
    const submitBtn = document.getElementById('modal-submit-btn');

    // Fungsi untuk memproses dan menampilkan nama
    const submitName = () => {
        const userName = nameInput.value.trim();
        welcomeNameElement.textContent = userName ? userName : "Guest";
        modalOverlay.style.display = 'none';
    };

    // Tampilkan modal jika elemennya ada
    if (welcomeNameElement && modalOverlay && nameInput && submitBtn) {
        modalOverlay.style.display = 'flex';
        nameInput.focus();
        
        // Tambahkan event listener untuk tombol submit
        submitBtn.addEventListener('click', submitName);
        
        // Tambahkan event listener untuk tombol 'Enter' pada keyboard
        nameInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                submitName();
            }
        });
    }


    // --- VALIDASI FORM DAN MENAMPILKAN HASIL ---
    const messageForm = document.getElementById('message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            // Mencegah form mengirim data dan me-refresh halaman
            event.preventDefault();

            // Mengambil nilai dari setiap input
            const name = document.getElementById('nama').value;
            const dob = document.getElementById('tanggal-lahir').value;
            const genderElement = document.querySelector('input[name="gender"]:checked');
            const message = document.getElementById('pesan').value;
            
            // Validasi sederhana: pastikan semua field terisi
            if (!name || !dob || !genderElement || !message) {
                alert('Semua kolom wajib diisi!');
                return;
            }
            
            const gender = genderElement.value;

            // Mengisi bagian output dengan data dari form
            document.getElementById('output-name').textContent = name;
            document.getElementById('output-dob').textContent = dob;
            document.getElementById('output-gender').textContent = gender;
            document.getElementById('output-message').textContent = message;

            // Mengisi waktu saat ini
            const now = new Date();
            document.getElementById('output-time').textContent = now.toString();
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

});