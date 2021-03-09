const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentSore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentSore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the sae button!")
    e.preventDefault();
};