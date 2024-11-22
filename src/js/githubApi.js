const username = "fatkhurrhn";
const repoContainer = document.getElementById("repos");

// Fungsi untuk mengambil semua halaman repository
async function fetchAllRepositories() {
  let page = 1;
  let repos = [];
  let fetchMore = true;

  while (fetchMore) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=100&sort=updated`
      );
      const data = await response.json();

      // Jika data kosong, maka semua repositori sudah diambil
      if (data.length === 0) {
        fetchMore = false;
      } else {
        repos = repos.concat(data); // Gabungkan data halaman ini ke daftar repositori
        page++;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      fetchMore = false;
    }
  }

  return repos;
}

// Fungsi untuk menampilkan repositori di HTML
function displayRepositories(repos) {
  // Sortir repositori berdasarkan waktu pembaruan terbaru
  repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  repoContainer.innerHTML = ""; // Kosongkan kontainer sebelum menampilkan data baru
  repos.forEach((repo) => {
    const repoElement = document.createElement("div");
    repoElement.className =
      "bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-950 mb-4";
    repoElement.innerHTML = `
      <h2 class="text-lg font-bold text-gray-800">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </h2>
      <p class="text-sm text-gray-600">${
        repo.description || "No description"
      }</p>
      <p class="text-xs text-gray-500 mt-2">
        Updated at: ${new Date(repo.updated_at).toLocaleString()}
      </p>
        `;
    repoContainer.appendChild(repoElement);
  });
}

// Fungsi utama untuk mengambil dan menampilkan repositori
async function loadRepositories() {
  const repos = await fetchAllRepositories();
  displayRepositories(repos);
}

// Memanggil loadRepositories() secara berkala untuk update real-time
loadRepositories();
setInterval(loadRepositories, 60000); // Update setiap 60 detik

function searchRepositories() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const repoElements = document.querySelectorAll("#repos > div");

  repoElements.forEach((repoElement) => {
    const repoName = repoElement.querySelector("h2").textContent.toLowerCase();
    // Tampilkan hanya repository yang sesuai dengan input pencarian
    repoElement.style.display = repoName.includes(searchInput)
      ? "block"
      : "none";
  });
}
