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
drawRect(stripeWidth, 78, stripeWidth * 2, 120);
drawRect(stripeWidth, 108, (stripeWidth * 2) / 3, 60);
drawRect(stripeWidth, 122, -stripeWidth / 2.2, 31);

drawRect(canvas.width - stripeWidth * 3, 78, stripeWidth * 2, 120);
drawRect(canvas.width - stripeWidth / 0.6, 108, (stripeWidth * 2) / 3, 60);
drawRect(canvas.width - stripeWidth / 1.9, 122, -stripeWidth / 2.2, 31);

//arc draw function
const drawArc = (x, y, radius, startAngle, endAngle, counterClockwise) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
  ctx.stroke();
};

//middle circle
drawArc(canvas.width / 2, canvas.height / 2, 25, 0, 2 * Math.PI);

//small circles
drawArc(canvas.width / 2, canvas.height / 2, 1, 0, 2 * Math.PI);
drawArc(65, canvas.height / 2, 1, 0, 2 * Math.PI);
drawArc(345, canvas.height / 2, 1, 0, 2 * Math.PI);

//arc in front of goals
drawArc(stripeWidth * 2.3, 136, 30, 1.75 * Math.PI, 0.25 * Math.PI);
drawArc(
  canvas.width - stripeWidth * 2.3,
  136,
  30,
  0.75 * Math.PI,
  1.25 * Math.PI
);

//corners
drawArc(stripeWidth, stripeWidth, 8, 0, Math.PI / 2);
drawArc(canvas.width - stripeWidth, stripeWidth, 8, Math.PI / 2, Math.PI);
drawArc(stripeWidth, canvas.height - stripeWidth, 8, Math.PI * 1.5, 0);
drawArc(
  canvas.width - stripeWidth,
  canvas.height - stripeWidth,
  8,
  Math.PI,
  Math.PI * 1.5
);

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
