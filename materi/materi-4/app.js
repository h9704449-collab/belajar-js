console.log("==================");
console.log(" MATERI 4 - DOM");
console.log("==================");
console.log(document);
console.log(document.title);
// console.log(document.body);
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);
// pilih element berdasarkan id
const kicauCat = document.getElementById('kicau-cat');
// console.log(kicauCat);
const kicauImgSource = kicauCat.src;
console.log(kicauImgSource);
// kicauCat.remove();
kicauCat.style.border = '4px solid red';

const headerTitle = document.querySelector("h1");
headerTitle.textContent = "SINAU JS DOM";
console.log(headerTitle);

const domPargraf = document.querySelectorAll("p");
domPargraf[0].style.color = 'blue';
domPargraf[1].style.color = 'green';

// target button berdasarkan id
const btnChangeColor = document.getElementById('btn-change');
console.log(btnChangeColor);
// berikan button aksi saat di klik
btnChangeColor.addEventListener("click", function () {
    // munculkan alert dialog
    alert("Button diklik! 🎉");
    kicauCat.style.border = '4px solid indigo';
    kicauCat.style.marginLeft = '120px';
});