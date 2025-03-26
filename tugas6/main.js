import { index, store, destroy } from "./controller.js";

const main = () => {
  console.log("Sebelum Menambahkan Data:");
  index();

  // Menambahkan 2 data baru
  store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@example.com" });
  store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@example.com" });

  console.log("\nSetelah Menambahkan Data:");
  index();

  // Menghapus satu data terakhir
  destroy();

  console.log("\nSetelah Menghapus Satu Data:");
  index();
};

main();
