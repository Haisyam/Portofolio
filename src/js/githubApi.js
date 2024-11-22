const username = "Haisyam";
const token =
  "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"; // Replace with your token
const repoContainer = document.getElementById("repos");

async function fetchAllRepositories() {
  let page = 1;
  let repos = [];
  let fetchMore = true;

  while (fetchMore) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=100&sort=updated`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      const data = await response.json();

      if (data.length === 0) {
        fetchMore = false;
      } else {
        repos = repos.concat(data);
        page++;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      fetchMore = false;
    }
  }

  return repos;
}

function displayRepositories(repos) {
  repoContainer.innerHTML = "";
  repos.forEach((repo) => {
    const repoElement = document.createElement("div");
    repoElement.className =
      "bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-950 pb-14";
    repoElement.innerHTML = `
      <h2 class="text-lg font-bold text-gray-800">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </h2>
      <p class="text-gray-600">${repo.description || "No description"}</p>
      <p class="text-sm text-gray-500 mt-2">
        Updated at: ${new Date(repo.updated_at).toLocaleString()}
      </p>
    `;
    repoContainer.appendChild(repoElement);
  });
}

async function loadRepositories() {
  const repos = await fetchAllRepositories();
  displayRepositories(repos);
}

loadRepositories();
setInterval(loadRepositories, 60000);
