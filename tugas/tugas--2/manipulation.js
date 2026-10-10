// ========================================
// Student Data Processor
// Nama   : [Nama Santri]
// Kelas  : XI Rombel 1 Mr Izan
// ========================================

// ============================================
// 📦 RAW DATA - Data mentah yang akan diolah
// ============================================
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// ============================================
// 🧩 PART 1 — 🧹 CLEAN THE NAME
// Membersihkan nama dari spasi berlebih
// dan memperbaiki kapitalisasi
// ============================================

// Step 1: Hapus spasi di awal dan akhir menggunakan trim()
const trimmedName = studentName.trim(); // "aHmAd fAuZaN"

// Step 2: Ubah semua huruf menjadi lowercase
const lowerName = trimmedName.toLowerCase(); // "ahmad fauzan"

// Step 3: Pisahkan menjadi array berdasarkan spasi
const nameArray = lowerName.split(" "); // ["ahmad", "fauzan"]

// Step 4: Kapitalisasi huruf pertama setiap kata menggunakan toUpperCase() dan slice()
const capitalizedNameArray = nameArray.map(word => {
    const firstChar = word.slice(0, 1).toUpperCase(); // Huruf pertama uppercase
    const restChars = word.slice(1); // Sisa karakter tetap lowercase
    return firstChar + restChars;
}); // ["Ahmad", "Fauzan"]

// Step 5: Gabungkan kembali menjadi string menggunakan join()
const cleanName = capitalizedNameArray.join(" "); // "Ahmad Fauzan"

// 🔑 USERNAME - Membuat username dari nama
// Menggunakan split(), toLowerCase(), dan join()
const username = studentName.trim().toLowerCase().split(" ").join("."); // "ahmad.fauzan"

// ============================================
// 🧩 PART 2 — 🔍 ANALYZE THE NAME
// Menganalisis isi dari nama siswa
// ============================================

// 1. Cek apakah nama mengandung "Ahmad" menggunakan includes()
const containsAhmad = cleanName.includes("Ahmad"); // true

// 2. Ambil 5 karakter pertama menggunakan slice()
const first5Chars = cleanName.slice(0, 5); // "Ahmad"

// 3. Ganti nama "Ahmad" menjadi "Budi" menggunakan replace()
const replacedName = cleanName.replace("Ahmad", "Budi"); // "Budi Fauzan"

// ============================================
// 🧩 PART 3 — 🎂 PROCESS THE AGE
// Mengkonversi string umur menjadi angka
// ============================================

// Mengambil angka dari string menggunakan parseInt()
const age = parseInt(ageText); // 17

// ⭐ Bonus - Menghitung tahun lahir
const currentYear = new Date().getFullYear(); // Tahun sekarang (dynamis)
const birthYear = currentYear - age; // Tahun lahir = 2026 - 17 = 2009

// ============================================
// 🧩 PART 4 — 📊 PROCESS THE SCORE
// Mengkonversi dan memproses nilai siswa
// ============================================

// Konversi string ke float menggunakan parseFloat()
const score = parseFloat(scoreText); // 85.678

// Format dengan 2 desimal menggunakan toFixed()
const formattedScore = score.toFixed(2); // "85.68"

// Pembulatan menggunakan Math methods
const roundScore = Math.round(score); // 86 (pembulatan terdekat)
const floorScore = Math.floor(score); // 85 (pembulatan ke bawah)
const ceilScore = Math.ceil(score);   // 86 (pembulatan ke atas)

// ============================================
// 🧩 PART 5 — 🏆 DETERMINE THE GRADE
// Menentukan grade berdasarkan nilai
// ============================================

let grade;

// Menggunakan if/else if/else untuk menentukan grade
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else {
    grade = "E";
}
// Untuk nilai 85.678, grade = "B"

// ============================================
// 🧩 PART 6 — 📅 PROCESS REGISTRATION DATE
// Memisahkan dan mengkonversi tanggal
// ============================================

// Split tanggal menggunakan split("-")
const regDateArray = registrationText.split("-"); // ["21", "08", "2026"]

// Konversi setiap bagian menjadi Number menggunakan Number()
const regDay = Number(regDateArray[0]);   // 21
const regMonth = Number(regDateArray[1]); // 8
const regYear = Number(regDateArray[2]);  // 2026

// Format tanggal registrasi
const formattedRegDate = `${String(regDay).padStart(2, "0")}/${String(regMonth).padStart(2, "0")}/${regYear}`;

// ============================================
// 🧩 PART 7 — ⏰ CURRENT DATE & TIME
// Mendapatkan informasi tanggal dan waktu saat ini
// ============================================

const now = new Date();

// Mengambil komponen tanggal dan waktu
const reportYear = now.getFullYear();      // Tahun (4 digit)
const reportMonth = now.getMonth() + 1;    // Bulan (0-11, jadi +1)
const reportDate = now.getDate();          // Tanggal (1-31)
const reportDay = now.getDay();            // Hari (0=Minggu, 6=Sabtu)
const reportHours = now.getHours();        // Jam (0-23)
const reportMinutes = now.getMinutes();    // Menit (0-59)

// Format time dengan leading zero menggunakan padStart()
const formattedTime = `${String(reportHours).padStart(2, "0")}:${String(reportMinutes).padStart(2, "0")}`;

// ============================================
// 🧩 PART 8 — 📅 CREATE DATE FORMATTER
// Membuat function untuk formatting tanggal
// ============================================

function formatDate(date) {
    // Mengambil komponen tanggal
    const day = String(date.getDate()).padStart(2, "0");     // DD
    const month = String(date.getMonth() + 1).padStart(2, "0"); // MM
    const year = date.getFullYear();                          // YYYY
    
    // Mengembalikan format DD/MM/YYYY
    return `${day}/${month}/${year}`;
}

// Menggunakan function formatDate
const formattedReportDate = formatDate(now);

// ============================================
// 🧩 PART 9 — 🎲 LUCKY DICE
// Fitur random sederhana
// ============================================

// Generate angka random 1-6 menggunakan Math.random() dan Math.floor()
const dice = Math.floor(Math.random() * 6) + 1;

// Menentukan hasil dadu menggunakan if/else
let diceResult;

if (dice === 6) {
    diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
    diceResult = "💀 BAD LUCK!";
} else {
    diceResult = "😎 GOOD LUCK!";
}

// ============================================
// ⭐ BONUS KREATIVITAS — Fitur Tambahan
// Menambahkan fitur extra yang berkaitan
// dengan Data Manipulation
// ============================================

// 📧 Generate email otomatis dari username
const email = `${username}@student.hsi.sch.id`;

// 🔤 Hitung jumlah karakter nama (tanpa spasi)
const nameLength = cleanName.replace(/ /g, "").length;

// ⏰ Greeting berdasarkan jam
let greeting;
if (reportHours >= 5 && reportHours < 12) {
    greeting = "🌅 Selamat Pagi";
} else if (reportHours >= 12 && reportHours < 15) {
    greeting = "☀️ Selamat Siang";
} else if (reportHours >= 15 && reportHours < 18) {
    greeting = "🌆 Selamat Sore";
} else {
    greeting = "🌙 Selamat Malam";
}

// 📅 Tampilkan nama hari berdasarkan getDay()
const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const dayName = dayNames[reportDay];

// 🏆 Status LULUS / BELUM LULUS (nilai >= 60 = LULUS)
const passStatus = (score >= 60) ? "✅ LULUS" : "❌ BELUM LULUS";

// 📦 Membuat Object student untuk menyimpan semua data
const student = {
    originalName: studentName,
    cleanName: cleanName,
    username: username,
    email: email,
    age: age,
    birthYear: birthYear,
    score: score,
    grade: grade,
    passStatus: passStatus,
    registrationDate: formattedRegDate
};

// ============================================
// 🧩 PART 10 — 🖥️ FINAL REPORT
// Menggabungkan seluruh hasil ke satu laporan
// ============================================

console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");
console.log("");

// Menampilkan greeting dan hari
console.log(`${greeting}, ${student.cleanName}!`);
console.log(`📅 Hari ini ${dayName}`);
console.log("");

console.log("👤 STUDENT");
console.log("────────────────────────────────────");
console.log(`Original Name : "${student.originalName}"`);
console.log(`Clean Name    : ${student.cleanName}`);
console.log(`Username      : ${student.username}`);
console.log(`Email         : ${student.email}`);
console.log(`Name Length   : ${nameLength} characters`);
console.log("");

console.log("🔎 NAME ANALYSIS");
console.log("────────────────────────────────────");
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${first5Chars}`);
console.log(`Replacement    : ${replacedName}`);
console.log("");

console.log("🎂 AGE");
console.log("────────────────────────────────────");
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${student.age}`);
console.log(`Birth Year     : ${student.birthYear}`);
console.log("");

console.log("📊 SCORE");
console.log("────────────────────────────────────");
console.log(`Original Score : ${scoreText}`);
console.log(`Formatted      : ${formattedScore}`);
console.log(`Round          : ${roundScore}`);
console.log(`Floor          : ${floorScore}`);
console.log(`Ceil           : ${ceilScore}`);
console.log(`Grade          : ${student.grade}`);
console.log(`Status         : ${student.passStatus}`);
console.log("");

console.log("📅 REGISTRATION");
console.log("────────────────────────────────────");
console.log(`Date           : ${student.registrationDate}`);
console.log("");

console.log("🕐 REPORT GENERATED");
console.log("────────────────────────────────────");
console.log(`Date           : ${formattedReportDate}`);
console.log(`Time           : ${formattedTime}`);
console.log("");

console.log("🎲 LUCKY DICE");
console.log("────────────────────────────────────");
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);
console.log("");

console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║"); 
console.log("╚════════════════════════════════════╝");