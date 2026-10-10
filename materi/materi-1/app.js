console.log("Bismillah...")
console.log('------------')
// Hello ini tulis tak terbaca
// setiap deklarasi itu diberi titik koma ;
let namaStasiun = "St. Kutoarjo"; // String
let nomorGerbong = 4; // integer atau number
let stasiunKeberangkatan = false; // boolean
console.log(namaStasiun); // print value-nya
// debug variable jadi object
console.log({ nomorGerbong, stasiunKeberangkatan });
// var => mutable = boleh di ubah - VERSI JADUL
// let => mutable = boleh di ubah
// const (Constant) => immutable = gk boleh di ubah
const jumlahKursi = 50;
nomorGerbong = 6;// ganti nomor gerbong
console.log({ nomorGerbong, jumlahKursi });
// jumlahKursi = 100; kena type error
// TEMPLATE LITERAL = cara ngeformat string
// versi ribet pke = (Plus)
// const infoKereta = "Stasiun: " + namaStasiun + "- Nomor Gerbong: " + nomorGerbong
// versi lebih clean pake ` (backtick)
const infoKereta = `
    🚉 Stasiun: ${namaStasiun}
    #️⃣  Nomor Gerbong: ${nomorGerbong}
`;
console.log(infoKereta);
let nilaiA = 10;
let nilaiB = 5;
const formulaX = nilaiA + nilaiB; // 10 + 5 = 15
console.log({ nilaiA, nilaiB, formulaX })
nilaiA = "15"; // string
const formulaZ = nilaiA + nilaiB; // "15" + 5 = "155"
console.log({ nilaiA, nilaiB, formulaZ })
nilaiA = 20; // integer
nilaiB = "30"; // string
const formulaSSS = nilaiB - nilaiA; // "30" - 20 = 10
console.log({ nilaiA, nilaiB, formulaSSS })

// typeof = pengecekkan type data
const checkNilai = typeof nilaiB;
console.log({ checkNilai })
if (checkNilai === 'number') {
    console.log('INI BENAR NUMBER BANG!');
} else {
    console.log('INI BUKAN NUMBER WOY!')
}

// operator perbandingan //
const umurUjang = 19;
const umurAgung = 20;
const cekUmur = umurUjang == umurAgung //fals
if (cekUmur) {
    console.log('umur ujang dan agung samaan');
} else {
    console.log('umurnya beda');
}

const umurSumanto = 23;
if (umurSumanto > umurUjang) {
    console.log('sumanto lebih tua dari ujang');
} else {
    console.log('sumanto lebih muda dari ujang');
}

const umurCahyono = 23;
if (umurSumanto !== umurCahyono) {
    console.log('umur mereka berbeda');
} else {
    console.log('umur mereka sama');
}


const daftarKereta = ["bengawan", "prameks", "logawa", "saungjalih"]
console.log(daftarKereta);
console.log(daftarKereta[0]);
console.log(daftarKereta[1]);
console.log(daftarKereta[2]);
console.log(daftarKereta[3]);

for (let i = 5; i >= 0; i--) {
    console.log(`HALO KAK ${i}`);
}

// cek jumalah data dengan fungsi length (bawaan array)
const jumlahKereta = daftarKereta.length;
console.log({ jumlahKereta });
for (let x = 0; x < daftarKereta.length; x++) {
    const namaKereta = daftarKereta[x];
    console.log(`Kereta ${namaKereta}`);
}
const profilSantri = {
    nama: "Harun ganteng",
    kelas: "11",
    status: "true",
    asrama: "ibnu sina",
    alamat: {
        detail: "JL. krajan RT 002 RW 008 NO 77"
    }
};
console.log(profilSantri);
console.log('INFO SANTRI');
console.log('----------------');
console.log(`Nama Lengkap: ${profilSantri.nama}`);
console.log(`Kelas: ${profilSantri.kelas}`);
console.log(`Asrama: ${profilSantri.asrama}`);
console.log(`Status: ${profilSantri.status}`);

// Date = fitur object pengolahan waktu
const tanggalBaru = new Date();
console.log(tanggalBaru.toString());
console.log(tanggalBaru.toLocaleString());