import users from "./data.js";

// Fungsi menampilkan data
const index = () => {
  console.log("Daftar Pengguna:");
  users.map((user, index) => {
    console.log(`${index + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat} - ${user.email}`);
  });
};

// Fungsi menambahkan data baru
const store = (user) => {
  users.push(user);
  console.log(`Data ${user.nama} berhasil ditambahkan.`);
};

// Fungsi menghapus data berdasarkan index terakhir
const destroy = () => {
  if (users.length > 0) {
    const deletedUser = users.pop();
    console.log(`Data ${deletedUser.nama} berhasil dihapus.`);
  } else {
    console.log("Tidak ada data yang bisa dihapus.");
  }
};

export { index, store, destroy };
