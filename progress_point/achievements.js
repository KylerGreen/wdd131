function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}

const ACHIEVEMENT_KEY = "progressPointAchievements";

const titleInput = document.getElementById("achievement-title");
const descriptionInput = document.getElementById("achievement-description");
const addButton = document.getElementById("add-achievement");
const achievementList = document.querySelector(".achievement-list");

window.addEventListener("pageshow", loadAchievements);
addButton.addEventListener("click", addAchievement);

function addAchievement() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!title) return;

  const achievements = getLocalStorage(ACHIEVEMENT_KEY);

  const achievement = {
    id: Date.now(),
    title,
    description
  };

  achievements.push(achievement);
  setLocalStorage(ACHIEVEMENT_KEY, achievements);

  displayAchievement(achievement);

  titleInput.value = "";
  descriptionInput.value = "";
}

function displayAchievement(achievement) {
  const card = document.createElement("div");
  card.className = "achievement-card";
  card.dataset.id = achievement.id;

  const info = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = achievement.title;

  const description = document.createElement("p");
  description.textContent = achievement.description || "No description provided.";

  const deleteButton = document.createElement("button");
  deleteButton.className = "secondary-btn";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteAchievement(achievement.id));

  info.appendChild(title);
  info.appendChild(description);

  card.appendChild(info);
  card.appendChild(deleteButton);

  achievementList.appendChild(card);
}

function deleteAchievement(id) {
  let achievements = getLocalStorage(ACHIEVEMENT_KEY);
  achievements = achievements.filter(a => a.id !== id);
  setLocalStorage(ACHIEVEMENT_KEY, achievements);

  const card = document.querySelector(`.achievement-card[data-id="${id}"]`);
  if (card) card.remove();
}

function loadAchievements() {
  achievementList.innerHTML = "<h2>My Achievements</h2>";
  const achievements = getLocalStorage(ACHIEVEMENT_KEY);
  achievements.forEach(displayAchievement);
}

window.addEventListener("pageshow", (e) => {
  if (e.persisted) loadAchievements();
});
