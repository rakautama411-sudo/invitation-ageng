function openInvitation() {
  // Sembunyikan opening
  document.getElementById("opening").style.display = "none";

  // Tampilkan semua section
  document.getElementById("main").style.display = "block";
  document.getElementById("ayat").style.display = "flex";
  document.getElementById("mempelai").style.display = "flex";
  document.getElementById("acara").style.display = "block";
  document.getElementById("maps").style.display = "block";
  document.getElementById("gift").style.display = "block";
  document.getElementById("ucapan").style.display = "block";
  document.getElementById("penutup").style.display = "block";

  // ▶️ PLAY MUSIC (AMAN UNTUK HP)
  const music = document.getElementById("bg-music");
  music.volume = 0.6;
  music.play();

  // Scroll ke halaman utama
  document.getElementById("main")
    .scrollIntoView({ behavior: "smooth" });
}

// TANGGAL ACARA
const weddingDate = new Date("April 20, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) return;

  days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

const ayatSection = document.querySelector(".ayat");

window.addEventListener("scroll", () => {
  const ayatTop = ayatSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (ayatTop < screenHeight - 100) {
    ayatSection.classList.add("show");
  }
});

function copyRekening(no) {
  navigator.clipboard.writeText(no);
  alert("Nomor rekening berhasil disalin");
}

function kirimUcapan(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  const hadir = document.getElementById("kehadiran").value;

  const list = document.getElementById("listUcapan");

  const div = document.createElement("div");
  div.className = "ucapan-item";
  div.innerHTML = `
    <strong>${nama} (${hadir})</strong>
    <p>${pesan}</p>
  `;

  list.prepend(div);

  e.target.reset();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(".fade-up").forEach(el => {
  observer.observe(el);
});
