// Array dari teks yang ingin diketikkan
const texts = ["RPL", "Keuangan","Informasi"];
let textIndex = 0;
let charIndex = 0;

function type() {
  // Dapatkan elemen tempat teks akan diketikkan
  const typingElement = document.querySelector('.typingfooter');

  if (charIndex < texts[textIndex].length) {
    // Tambahkan karakter berikutnya ke elemen
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150); // Atur waktu untuk karakter berikutnya
  } else {
    // Hapus teks setelah selesai
    setTimeout(erase, 150);
  }
}

function erase() {
  const typingElement = document.querySelector('.typingfooter');

  if (charIndex > 0) {
    // Hapus karakter terakhir dari elemen
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 150); // Atur waktu untuk menghapus karakter berikutnya
  } else {
    // Pindah ke teks berikutnya setelah selesai menghapus
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type,150);
  }
}

// Mulai animasi mengetik
document.addEventListener('DOMContentLoaded', function() {
  // Pastikan elemen ada di halaman
  if (document.querySelector('.typingfooter')) {
    setTimeout(type, 150); // Tunda awal animasi
  }
});
    