document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('Modal');
    const closeModalButton = document.getElementById('closeModal');

    // Tampilkan modal saat halaman dimuat
    setTimeout( function(){
        modal.classList.remove('hidden');
    },  5000);

    setTimeout( function(){
        modal.classList.remove('hidden');
    },  35000);

    setTimeout( function(){
        modal.classList.remove('hidden');
    },  65000);


    // Tutup modal saat tombol "Tutup" diklik
    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

});