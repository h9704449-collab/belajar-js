// ============================================================
// 1. STATE & ELEMENT
// ============================================================
// "State" = data yang aplikasi simpan selama berjalan
let allRecipes = [];          // semua resep hasil fetch dari API
let showFavoritesOnly = false; // apakah sedang mode lihat favorit saja?

// Ambil semua elemen HTML yang akan kita manipulasi
const recipeGrid = document.getElementById("recipe-grid");
const searchInput = document.getElementById("search-input");
const mealFilter = document.getElementById("meal-filter");
const favButton = document.getElementById("show-favorites");
const statusMessage = document.getElementById("status-message");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

// ============================================================
// 2. FAVORITE — simpan di LocalStorage
// ============================================================
// LocalStorage hanya bisa menyimpan STRING,
// jadi array harus diubah pakai JSON.stringify(),
// dan dibaca balik pakai JSON.parse().

function getFavorites() {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : []; // kalau kosong, balikin array kosong
}

function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function toggleFavorite(id) {
  let favorites = getFavorites();

  if (favorites.includes(id)) {
    // Sudah jadi favorit → hapus dari daftar
    favorites = favorites.filter((favId) => favId !== id);
  } else {
    // Belum favorit → tambahkan
    favorites.push(id);
  }

  saveFavorites(favorites);
  renderRecipes(); // render ulang supaya ikon hati langsung berubah
}

// ============================================================
// 3. FETCH DATA dari DummyJSON
// ============================================================
// fetch() = minta data ke server. Karena butuh waktu, kita pakai
// async/await supaya kode "menunggu" datanya sampai dulu.

async function fetchRecipes() {
  statusMessage.textContent = "Memuat resep...";
  try {
    const response = await fetch("https://dummyjson.com/recipes?limit=50");
    const data = await response.json(); // ubah respons jadi objek JavaScript
    allRecipes = data.recipes;          // simpan ke state

    populateMealFilter(); // isi dropdown kategori dari data asli
    renderRecipes();      // tampilkan resep
    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Gagal memuat resep 😥 Cek koneksi internet kamu.";
  }
}

// ============================================================
// 4. ISI DROPDOWN FILTER (otomatis dari data API)
// ============================================================
function populateMealFilter() {
  const mealTypes = [];

  // Kumpulkan semua meal type yang unik (tidak boleh dobel)
  allRecipes.forEach((recipe) => {
    recipe.mealType.forEach((meal) => {
      if (!mealTypes.includes(meal)) {
        mealTypes.push(meal);
      }
    });
  });

  // Buat <option> untuk tiap meal type
  mealTypes.forEach((meal) => {
    const option = document.createElement("option");
    option.value = meal;
    option.textContent = meal;
    mealFilter.appendChild(option);
  });
}

// ============================================================
// 5. FILTER RESEP (search + kategori + favorit)
// ============================================================
function getFilteredRecipes() {
  const keyword = searchInput.value.toLowerCase().trim();
  const selectedMeal = mealFilter.value;

  return allRecipes.filter((recipe) => {
    // Cek nama mengandung kata kunci pencarian
    const cocokNama = recipe.name.toLowerCase().includes(keyword);

    // Cek kategori (kalau user pilih "Semua", nilainya "" → lolos semua)
    const cocokMeal =
      selectedMeal === "" || recipe.mealType.includes(selectedMeal);

    // Kalau mode favorit aktif, hanya tampilkan yang ada di LocalStorage
    const cocokFav = !showFavoritesOnly || getFavorites().includes(recipe.id);

    // Resep tampil hanya jika SEMUA syarat terpenuhi
    return cocokNama && cocokMeal && cocokFav;
  });
}

// ============================================================
// 6. RENDER — tampilkan resep ke halaman
// ============================================================
function renderRecipes() {
  const recipes = getFilteredRecipes();
  recipeGrid.innerHTML = ""; // kosongkan dulu, biar tidak dobel

  // Tampilkan pesan kalau hasilnya kosong
  if (recipes.length === 0) {
    statusMessage.textContent = showFavoritesOnly
      ? "Kamu belum punya favorit. Klik 🤍 di salah satu resep!"
      : "Resep tidak ditemukan. Coba kata kunci lain.";
    return;
  }
  statusMessage.textContent = "";

  recipes.forEach((recipe) => {
    const isFav = getFavorites().includes(recipe.id);

    // Buat elemen kartu resep
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="card-body">
        <h3>${recipe.name}</h3>
        <p class="card-meta">${recipe.cuisine} • ${recipe.difficulty}</p>
        <div class="card-footer">
          <span class="rating">⭐ ${recipe.rating}</span>
          <button class="fav-btn">${isFav ? "❤️" : "🤍"}</button>
        </div>
      </div>
    `;

    // Event 1: klik kartu → buka detail resep
    card.addEventListener("click", () => openDetail(recipe.id));

    // Event 2: klik hati → toggle favorit
    // stopPropagation() = hentikan event supaya TIDAK ikut membuka detail
    card.querySelector(".fav-btn").addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(recipe.id);
    });

    recipeGrid.appendChild(card);
  });
}

// ============================================================
// 7. DETAIL RESEP — tampilkan di modal
// ============================================================
function openDetail(id) {
  // Cari resep yang id-nya cocok di dalam allRecipes
  const recipe = allRecipes.find((r) => r.id === id);
  if (!recipe) return;

  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  modalBody.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" class="detail-img" />
    <h2>${recipe.name}</h2>
    <div class="detail-info">
      <span>⭐ ${recipe.rating} (${recipe.reviewCount} review)</span>
      <span>⏱️ ${totalTime} menit</span>
      <span>🍽️ ${recipe.servings} porsi</span>
      <span>🔥 ${recipe.caloriesPerServing} kalori/porsi</span>
    </div>
    <h3>🧺 Bahan-bahan</h3>
    <ul>
      ${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <h3>👨‍🍳 Cara Membuat</h3>
    <ol>
      ${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}
    </ol>
  `;

  modal.classList.remove("hidden"); // tampilkan modal
}

function closeModal() {
  modal.classList.add("hidden");
}

// ============================================================
// 8. EVENT LISTENER
// ============================================================
// Ketik di kotak pencarian → render ulang (event "input" jalan tiap ketikan)
searchInput.addEventListener("input", renderRecipes);

// Ganti kategori di dropdown → render ulang
mealFilter.addEventListener("click", renderRecipes);
mealFilter.addEventListener("change", renderRecipes);

// Tombol ❤️ Favorit → toggle mode "favorit saja"
favButton.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;
  favButton.classList.toggle("active", showFavoritesOnly);
  renderRecipes();
});

// Tutup modal lewat tombol ✕
modalClose.addEventListener("click", closeModal);

// Tutup modal juga kalau klik area gelap di luarnya
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// ============================================================
// 9. MULAI APLIKASI
// ============================================================
fetchRecipes();