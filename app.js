const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//draw square function
const drawSquare = (x, y, width, height) => {
  ctx.fillRect(x, y, width, height);
};

const stripeWidth = canvas.width / 14;

//Draw Background function
const drawBackground = () => {
  ctx.fillStyle = '#469307';
  drawSquare(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#5aab0f';
  for (i = 0; i < 13; i++) {
    if (i % 2 === 0) {
      drawSquare(stripeWidth * i, 0, stripeWidth, canvas.height);
    }
  }
};
drawBackground();

//draw line function
const drawLine = (startX, startY, endX, endY) => {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = 'white';
  ctx.stroke();
  ctx.closePath();
};
//draw rectangle function
const drawRect = (x, y, width, height) => {
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = 'white';
  ctx.strokeRect(x, y, width, height);
};
//Main outer lines:
drawRect(
  stripeWidth,
  stripeWidth,
  canvas.width - stripeWidth * 2,
  canvas.height - stripeWidth * 2
);
//middle line
drawLine(
  canvas.width / 2,
  stripeWidth,
  canvas.width / 2,
  canvas.height - stripeWidth
);

//Rectangles for goalie area
drawRect(stripeWidth, 80, stripeWidth * 2, 120);
drawRect(stripeWidth, 110, (stripeWidth * 2) / 3, 60);

//top
/* drawLine(
  stripeWidth,
  stripeWidth / 2,
  canvas.width - stripeWidth,
  stripeWidth / 2
);
//right
drawLine(
  canvas.width - stripeWidth,
  stripeWidth / 2,
  canvas.width - stripeWidth,
  canvas.height - stripeWidth / 2
);
//bottom
drawLine(
  canvas.width - stripeWidth,
  canvas.height - stripeWidth / 2,
  stripeWidth,
  canvas.height - stripeWidth / 2
);
//left
drawLine(
  stripeWidth,
  canvas.height - stripeWidth / 2,
  stripeWidth,
  stripeWidth / 2
);


 */
