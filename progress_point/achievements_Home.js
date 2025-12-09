const previewContainer = document.querySelector(".achievement-preview .preview-cards");

function loadRecentAchievements() {
  if (!previewContainer) return;

  previewContainer.innerHTML = "";
  const achievements = getLocalStorage(ACHIEVEMENT_KEY);

  const recentAchievements = achievements
    .sort((a, b) => b.id - a.id)
    .slice(0, 2);

  recentAchievements.forEach((achievement) => {
    const card = document.createElement("div");
    card.className = "achievement-card preview";

    const title = document.createElement("h3");
    title.textContent = achievement.title;

    const description = document.createElement("p");
    description.textContent = achievement.description || "No description provided.";

    card.appendChild(title);
    card.appendChild(description);

    previewContainer.appendChild(card);
  });
}

window.addEventListener("pageshow", loadRecentAchievements);