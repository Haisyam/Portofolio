// Fungsi untuk kembali ke halaman sebelumnya
function goBack() {
  if (window.history.length > 1) {
    window.history.back(); // Kembali ke halaman sebelumnya
  } else {
    alert(""); // Jika tidak ada halaman sebelumnya
  }
}
