const url = "data/members.json";
const display = document.querySelector("#memberDisplay");
const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  display.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
    `;
    display.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  display.classList.add("grid-view");
  display.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  display.classList.add("list-view");
  display.classList.remove("grid-view");
});

getMembers();
