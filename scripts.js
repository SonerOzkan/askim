const backToTopButton = document.getElementById('back-to-top');
window.onscroll = function () {
    backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
};
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const loveButton = document.getElementById('love-button');
loveButton.onclick = function () {
    const loveMessage = document.createElement('div');
    loveMessage.textContent = 'Seni seviyorum!';
    loveMessage.style = `
        position: fixed;
        bottom: ${Math.random() * 80 + 10}%;
        left: ${Math.random() * 80 + 10}%;
        font-size: 1.5rem;
        color: #ff7f7f;
        z-index: 1001;
        animation: fade-out 2s forwards;
    `;
    document.body.appendChild(loveMessage);
};

const counterElement = document.getElementById('counter');
const startDate = new Date('2024-10-12T00:00:00'); // Sayaç başlangıç tarihi

function updateCounter() {
    const now = new Date();
    if (now >= startDate) {
        counterElement.style.display = 'block'; // Sayaç görünür hale gelir
        const elapsed = Math.floor((now - startDate) / 1000); // Geçen saniyeler
        const days = Math.floor(elapsed / (24 * 3600));
        const hours = Math.floor((elapsed % (24 * 3600)) / 3600);
        const minutes = Math.floor((elapsed % 3600) / 60);
        const seconds = elapsed % 60;

        counterElement.textContent = `Geçen süre: ${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
    }
}

setInterval(updateCounter, 1000); // Sayaç her saniye güncellenir
