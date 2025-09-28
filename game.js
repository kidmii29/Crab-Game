const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let train = { x: 50, y: 200, width: 100, height: 50, capacity: 3, crabs: [] };
let coins = 0;

function drawTrain() {
  ctx.fillStyle = 'gray';
  ctx.fillRect(train.x, train.y, train.width, train.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(train.x + 10, train.y + 40, 20, 20);
  ctx.fillRect(train.x + 70, train.y + 40, 20, 20);
}

function drawCrabs() {
  ctx.fillStyle = 'red';
  train.crabs.forEach((crab, i) => {
    ctx.beginPath();
    ctx.arc(train.x + 20 + i*20, train.y - 10, 10, 0, Math.PI*2);
    ctx.fill();
  });
}

function updateCoins() {
  coins += train.crabs.length;
}

function drawCoins() {
  ctx.fillStyle = 'gold';
  ctx.font = '20px Arial';
  ctx.fillText('Coins: ' + coins, 10, 20);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTrain();
  drawCrabs();
  drawCoins();
  updateCoins();
  requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click', () => {
  if (train.crabs.length < train.capacity) {
    train.crabs.push({});
  }
});

gameLoop();
