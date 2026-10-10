console.log('==========================');
console.log('HSI STUDENT MANAGEMENT');
console.log('==========================');
let students = []; // nampung data siswa
// localStorage adalah atribut yang digunakan untuk menyimpan data di browser
// method setItem() digunakan untuk menyimpan data ke localStorage
localStorage.setItem('total_siswa', 9); // akan selalu jadi string
localStorage.setItem('kelas', 'XI RPL 1');

// method getItem() digunakan untuk mengambil data dari localStorage
const kelas = localStorage.getItem('kelas'); // get by key
const totalSiswa = localStorage.getItem('total_siswa'); // akan muncul string
console.log({ kelas, totalSiswa });

 const newStudent = {
  name: 'Budi Siregar',
  score: 90
};
const jawaStudent = {
  name: 'Budiono Giatno',
  score: 84
};
students.push(newStudent); // di tambahkan di akhir array
students.push(jawaStudent); // di tambahkan di akhir array

// JSON.stringify() adalah method yang digunakan untuk mengubah string menjadi object
localStorage.setItem('students', JSON.stringify(students));
// JSON.parse() adalah method yang digunakan untuk mengubah string menjadi array/object
const studentsFromStorage = JSON.parse(localStorage.getItem('students'));
console.log({ studentsFromStorage });

const studentList = document.getElementById("studentList");
console.log({ students });
// reset isi htnl studentList
// console.log({ studentsFromStorage });
studentList.innerHTML = "";
if (students.length === 0) {
  // gambarannya: <div class="empty">Belum ada data siswa</div>
  const emptyMessage = document.createElement("div");
  emptyMessage.className = "empty";
  emptyMessage.textContent = "Belum ada data siswa";
  // appendChild() untuk menambahkan element baru ke akhir element tsb
  studentList.appendChild(emptyMessage);
} else {
  // loop data students -> generate student Item -> appendChild() ke studentList
  students.forEach((student, index) => {
    const studentItem = document.createElement("div");
    studentItem.className = "student-item";
    studentItem.innerHTML = `
      <div class="student-name">
        <span class="student-number">${index + 1}.</span>${student.name}
      </div>
      <div class="score">${student.score}</div>
      <div class="action-buttons">
        <button class="edit-btn" type="button">✏️ Ubah</button>
        <button class="delete-btn" type="button">🗑️ Hapus</button>
      </div>
    `;
    studentList.appendChild(studentItem);
  });
}
