// MATERI3-PART2

console.log('MATERI3-PART2');
console.log('------------------');
const skills = ["HTML", "CSS", "JAVA", "PYTHON"];
console.log(skills);
// push = nambh di item terakhir
// unshift = nambah di item pertama
skills.push('tailwindCSS');
skills.unshift('GITHub');
console.log(skills);
// pop = menghapus item terakhir
// shift = menghapus item pertama
skills.pop();
skills.shift();
console.log(skills);
// include = cek apakah item ada si array atau tiddak
const cekJs = skills.includes('JavaScript')
const cekReactJs = skills.includes('ReactJS')
console.log({ cekJs, cekReactJs});

// -------------------------
const dompetDigital = [10000000, 75000000, 50000000]
console.log(dompetDigital);
const kursUSD = 17672;
const dompetDOLLAr = dompetDigital.map(
    duitRupiah => {
        const nilaiUSD = (duitRupiah / kursUSD).toFixed(2);
        return`$ ${nilaiUSD.toFixed}`;
    }
);
console.log(dompetDOLLAr);
const filterDuit = dompetDigital.filter(
    duitRupiah => duitRupiah < 1000000
);
console.log(filterDuit);
// mengakumulasi data dengan .reduce()
const totalDompetRupiah = dompetDigital.reduce(
    (akumulator, duitRupiah) => akumulator + duitRupiah,
    0
);
console.log(totalDompetRupiah);