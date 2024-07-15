  // Fungsi untuk menganimasikan angka dengan format titik, koma, dan persen
  function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentNumber = Math.floor(progress * (end - start) + start);
        // Format angka menjadi string dengan titik sebagai pemisah ribuan
        element.innerText = new Intl.NumberFormat('id-ID').format(currentNumber);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.classList.remove('animated'); // Menghapus class 'animated' setelah animasi selesai
        }
    };
    window.requestAnimationFrame(step);
}

// Mendeteksi event scroll pada window
window.addEventListener('scroll', () => {
    const numberElement = document.getElementById('number'); // Ganti dengan ID elemen Anda
    // Format targetNumber sebagai string dengan titik, koma, dan persen
    const targetNumber = '23'; // Contoh format dengan titik, koma, dan persen
    // Mengonversi string targetNumber ke angka untuk animasi
    const targetValue = parseFloat(targetNumber.replace(/\.|,|%| /g, ''));

    // Mengatur kondisi untuk memulai animasi
    const position = numberElement.getBoundingClientRect();
    
    // Jika elemen dalam viewport dan belum di-animasikan
    if (position.top < window.innerHeight && position.bottom >= 0 && !numberElement.classList.contains('animated')) {
        numberElement.classList.add('animated');
        animateNumber(numberElement, 0, targetValue, 4000); // Durasi animasi adalah 2000ms atau 2 detik
    }
});

window.addEventListener('scroll', () => {
    const numberElement = document.getElementById('number2'); // Ganti dengan ID elemen Anda
    // Format targetNumber sebagai string dengan titik, koma, dan persen
    const targetNumber = '-1,747,000'; // Contoh format dengan titik, koma, dan persen
    // Mengonversi string targetNumber ke angka untuk animasi
    const targetValue = parseFloat(targetNumber.replace(/\.|,|%| /g, ''));

    // Mengatur kondisi untuk memulai animasi
    const position = numberElement.getBoundingClientRect();
    
    // Jika elemen dalam viewport dan belum ==di-animasikan
    if (position.top < window.innerHeight && position.bottom >= 0 && !numberElement.classList.contains('animated')) {
        numberElement.classList.add('animated');
        animateNumber(numberElement, 0, targetValue, 3000); // Durasi animasi adalah 2000ms atau 2 detik
    }
});