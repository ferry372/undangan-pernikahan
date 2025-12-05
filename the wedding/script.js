// =============================
// SMOOTH SCROLL UNTUK NAV LINK
// =============================
document.querySelectorAll('.bottom-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");

    const text = input.value.trim();

    if (text === "") return;

    // buat elemen chat bubble
    const bubble = document.createElement("div");
    bubble.className = "chat-message";
    bubble.textContent = text;

    // masukkan ke chatbox
    chatBox.appendChild(bubble);

    // auto scroll ke bawah
    chatBox.scrollTop = chatBox.scrollHeight;

    // hapus text input
    input.value = "";
}

// =============================
// HIGHLIGHT MENU SAAT SCROLL
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".bottom-nav a");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach((a) => a.classList.remove("active"));
            
            // PERBAIKAN DISINI
            const activeLink = document.querySelector(`.bottom-nav a[href="#${section.id}"]`);
            activeLink?.classList.add("active");
        }
    });
});

// =============================
// AUTO PLAY MUSIK (OPSIONAL)
// =============================
const audio = document.getElementById("music");

function playMusic() {
    audio.play().catch(() => {});
}
document.addEventListener('click', playMusic);
document.addEventListener('scroll', playMusic);

// =============================
// ANIMASI FADE SAAT SCROLL
// =============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-show");
        }
    });
});

document.querySelectorAll(".content-section").forEach(sec => {
    sec.classList.add("fade-hidden");
    observer.observe(sec);
});
