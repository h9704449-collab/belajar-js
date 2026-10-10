// ==========================================
// HSI STUDENT REPORT CARD
// ==========================================

// Data siswa menggunakan Array + Object
const students = [
  {
    name: "Harun",
    className: "11",
    scores: [85, 90, 88],
    attendance: 95,
    hasViolation: false,
  },
  {
    name: "Ahmad",
    className: "11",
    scores: [75, 80, 78],
    attendance: 85,
    hasViolation: false,
  },
  {
    name: "Fajar",
    className: "11",
    scores: [60, 65, 70],
    attendance: 75,
    hasViolation: true,
  },
];

// Mengambil tanggal saat program dijalankan
const reportDate = new Date();

// Variabel untuk bonus
let totalLulus = 0;
let totalBelumLulus = 0;

let highestAverage = 0;
let highestStudent = "";

// Header report
console.log(`
========================================
       HSI STUDENT REPORT CARD
========================================
Tanggal : ${reportDate}
`);

// Memproses semua siswa dengan for loop biasa
for (let i = 0; i < students.length; i++) {
  // Mengambil data siswa
  const student = students[i];

  // Menghitung total nilai
  let total = 0;

  // Menghitung nilai menggunakan for loop biasa
  for (let j = 0; j < student.scores.length; j++) {
    total = total + student.scores[j];
  }

  // Menghitung rata-rata
  const average = total / student.scores.length;

  // Menentukan grade
  let grade;

  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average < 90) {
    grade = "B";
  } else if (average >= 70 && average < 80) {
    grade = "C";
  } else {
    grade = "D";
  }

  // Menentukan status kelulusan
  let status;

  if (average >= 75 && student.attendance >= 80 && !student.hasViolation) {
    status = "LULUS";
    totalLulus++;
  } else {
    status = "BELUM LULUS";
    totalBelumLulus++;
  }

  // Mencari siswa dengan rata-rata tertinggi
  if (average > highestAverage) {
    highestAverage = average;
    highestStudent = student.name;
  }

  // Menampilkan report siswa
  console.log(`
----------------------------------------
Student #${i + 1}
----------------------------------------
Nama        : ${student.name}
Kelas       : ${student.className}
Nilai       : ${student.scores}
Total       : ${total}
Rata-rata   : ${average.toFixed(2)}
Grade       : ${grade}
Kehadiran   : ${student.attendance}%
Pelanggaran : ${student.hasViolation}
Status      : ${status}
`);
}

// ==========================================
// BONUS
// ==========================================

console.log(`
========================================
              HASIL AKHIR
========================================
Jumlah siswa LULUS        : ${totalLulus}
Jumlah siswa BELUM LULUS  : ${totalBelumLulus}
Rata-rata tertinggi       : ${highestAverage.toFixed(2)}
Siswa terbaik             : ${highestStudent}
========================================
`);
