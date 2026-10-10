console.log("=========================================")
console.log("MATERI 3 PART 1- DATA MANIPULATION")
console.log("==========================================")
// String manipulation
const namasultan = "Sri Sultan Hamengku Buwono"
const namakecil = namasultan.toLowerCase();
const namabesar = namasultan.toUpperCase();
console.log({ namasultan });
console.log({ namakecil,namabesar });
const gelar = namasultan.slice(11, 26); // (index awal, index akhir)
const nomorgelar = namasultan.replace("X", "XII"); // target, timpaan
console.log({ gelar, nomorgelar });
const ceksultan = namasultan.includes("sultan");
if (ceksultan) {
    console.log(">> Nama Sultan Valid")
} else {
    console.log(">> Tidak Ditemukan Nama Sultan!")
}
// Number manipulation
const hartasultan = "3500000000";
const konversiharta = Number(hartasultan);
console.log({ hartasultan, konversiharta });
const utangsultan = "25000.678"; // string desimal
const konversiutang = Number(utangsultan);
const konversiutangduakoma = konversiutang.toFixed(2); // jadi string
console.log({ konversiutang, konversiutangduakoma });
// math function untuk perhitungan angka
// round(), floor(), ceil()
const konversiutangpembulatan = Math.ceil(konversiutang);
console.log({ konversiutangpembulatan });
// Date manipulation
const saiki = new Date();
console.log({ saiki });
const tahunini = saiki.getFullYear();
const bulanini = saiki.getMonth();
const hariini = saiki.getDay();
const tanggalini = saiki.getDate();
console.log({ tahunini, hariini, bulanini, tanggalini });
const hariindo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const hariiniindo = hariindo[hariini];
console.log({ hariiniindo });