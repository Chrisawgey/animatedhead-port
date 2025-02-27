// Fetch and display GitHub repositories
const username = "Chrisawgey"; // Your GitHub username
const reposContainer = document.getElementById("repos-container");

async function fetchRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
    const repos = await response.json();

    // Display only the 5 most recent repositories
    const recentRepos = repos.slice(0, 5);
    reposContainer.innerHTML = recentRepos
      .map(
        (repo) => `
        <div class="repo">
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description available."}</p>
          <p><strong>Language:</strong> ${repo.language || "Not specified"}</p>
          <a href="${repo.html_url}" target="_blank" class="btn">
            View on GitHub
          </a>
        </div>
      `
      )
      .join("");
  } catch (error) {
    console.error("Error fetching repositories:", error);
    reposContainer.innerHTML = "<p>Failed to load repositories. Please try again later.</p>";
  }
}

// Call the function
fetchRepos();