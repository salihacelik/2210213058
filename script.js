// Koyu Mod (Dark Mode) Butonu
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Buton metnini değiştirelim
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Aydınlık Modu Aktif Et';
    } else {
        toggleButton.textContent = 'Koyu Modu Aktif Et';
    }
});

// Form İletisi Gösterme
document
