const characterCard = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 8,
  health: 100,
  img: "snortleblat.webp",

  attacked: function () {
    this.health = Math.max(0, this.health - 20);

    renderCharacter(this);

    if (this.health === 0) {
      alert(`${this.name} has died!`);
    }
  },

  levelUp: function () {
    this.level++;
    renderCharacter(this);
  },
};

function renderCharacter(character) {
  document.querySelector("#characterName").textContent = character.name;
  document.querySelector("#characterClass").textContent = character.class;
  document.querySelector("#characterLevel").textContent = character.level;
  document.querySelector("#characterHealth").textContent = character.health;
  document.querySelector("#characterImg").src = character.img;
}

document.querySelector("#attacked").addEventListener("click", function () {
  characterCard.attacked();
});

document.querySelector("#levelUp").addEventListener("click", function () {
  characterCard.levelUp();
});

renderCharacter(characterCard);

