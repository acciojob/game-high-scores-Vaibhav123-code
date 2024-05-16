let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (name === "" || score === "") {
    alert("Please enter both name and score.");
    return;
  }

  // Add the new score to the highScores array
  highScores.push({ name, score });

  // Sort scores by score in descending order
  highScores.sort((a, b) => b.score - a.score);

  // Update local storage
  localStorage.setItem('highScores', JSON.stringify(highScores));

  // Show updated scores
  showScores();
}

// Show scores in div
function showScores() {
  scores.innerHTML = ""; // Clear previous scores

  if (highScores.length === 0) {
    scores.textContent = "No scores yet";
    return;
  }

  const table = document.createElement("table");
  const headerRow = table.insertRow(0);
  const nameHeader = headerRow.insertCell(0);
  const scoreHeader = headerRow.insertCell(1);

  nameHeader.textContent = "Name";
  scoreHeader.textContent = "Score";

  highScores.forEach((entry, index) => {
    const row = table.insertRow(index + 1);
    const nameCell = row.insertCell(0);
    const scoreCell = row.insertCell(1);

    nameCell.textContent = entry.name;
    scoreCell.textContent = entry.score;
  });

  scores.appendChild(table);
}

// Show scores when the page loads
window.onload = showScores;
