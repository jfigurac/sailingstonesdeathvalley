let stone1;
let stone2;
let stone3;
let stone4;
let stone5;
let stone6;
let stone7;
let stone8;
let stone9;

let x1 = 15;
let y1 = 80;
let stone1Trail = []; // Array to store past positions of the image
let trailLength1 = 3840;
let ydirection1 = 0;

let x2 = 60;
let y2 = 200;
let stone2Trail = []; // Array to store past positions of the image
let trailLength2 = 3840;
let ydirection2 = 0;

let x3 = 200;
let y3 = 400;
let stone3Trail = []; // Array to store past positions of the image
let trailLength3 = 3840;
let ydirection3 = 0;

let x4 = 30;
let y4 = 300;
let stone4Trail = []; // Array to store past positions of the image
let trailLength4 = 3840;
let ydirection4 = 0;

let x5 = 250;
let y5 = 435;
let stone5Trail = []; // Array to store past positions of the image
let trailLength5 = 3840;
let ydirection5 = 0;

let x6 = 335;
let y6 = 500;
let stone6Trail = []; // Array to store past positions of the image
let trailLength6 = 3840;
let ydirection6 = 0;

let x7 = 25;
let y7 = 600;
let stone7Trail = []; // Array to store past positions of the image
let trailLength7 = 3840;
let ydirection7 = 0;

let x8 = 80;
let y8 = 675;
let stone8Trail = []; // Array to store past positions of the image
let trailLength8 = 3840;
let ydirection8 = 0;

let x9 = 500;
let y9 = 780;
let stone9Trail = []; // Array to store past positions of the image
let trailLength9 = 3840;
let ydirection9 = 0;



function preload(){
  stone1 = createImg('Rock_1.svg');
  stone2 = createImg('Rock_2.svg');
  stone3 = createImg('Rock_3.svg');
  stone4 = createImg('Rock_4.svg');
  stone5 = createImg('Rock_5.svg');
  stone6 = createImg('Rock_6.svg');
  stone7 = createImg('Rock_7.svg');
  stone8 = createImg('Rock_8.svg');
  stone9 = createImg('Rock_9.svg');
}

function setup() {
  clear();
  createCanvas(windowWidth, windowHeight);
  x = width;
  y = height;
}

function draw() {
  
  //Stone 1
  if (x1 < 1600) {
    x1+= 1;
  }
  y1+= ydirection1
  
  if (x1 > 50 && y1 < 70) {
    ydirection1 = 1;
  }
  
  if (y1 == 70) {
    ydirection1 = 0;
  }
  
  if (x1 > 60 && y1 > 65) {
    ydirection1 = -1;
  }
  
  if (y1 == 65) {
    ydirection1 = 0;
  }
  
  if (x1 > windowWidth / 4 && y1 < 110) {
    ydirection1 = 1;
  }
  
  if (y1 == 110) {
    ydirection1 = 0;
  }
  
  if (x1 > windowWidth * 3 / 6 && y1 < 145) {
    ydirection1 = 1;
  }
  
  if (y1 == 145) {
    ydirection1 = 0;
  }
  
  if (x1 > windowWidth * 3 / 4 && y1 > 130) {
    ydirection1 = -1;
  }
  
  if (y1 == 130 && x1 > windowWidth * 3 / 4) {
    ydirection1 = 0;
  }
  
  //Stone 2
  if (x2 < 1450) {
    x2+= 1;
  }
  y2+= ydirection2
  
  if (x2 > 100 && y2 < 225) {
    ydirection2 = 1
  }
  
  if (y2 == 225) {
    ydirection2 = 0;
  }
  
  if (x2 > 150 && y2 > 175) {
    ydirection2 = -1;
  }
  
  if (y2 == 175) {
    ydirection2 = 0;
  }
  
  if (x2 > 210 && y2 > 160) {
    ydirection2 = -1;
  }
  
  if (y2 == 160) {
    ydirection2 = 0;
  }
  
  if (x2 > 375 && y2 < 245) {
    ydirection2 = 1;
  }
  
  if (y2 == 245) {
    ydirection2 = 0;
  }
  
  //Stone 3
  if (x3 < 1625) {
    x3+= 1;
  }
  y3+= ydirection3
  
  if (x3 > windowWidth * 3 / 8 && y3 > 380) {
    ydirection3 = -1;
  }
  
  if (y3 == 380) {
    ydirection3 = 0;
  }
  
  if (x3 > windowWidth * 3 / 6 && y3 < 450) {
    ydirection3 = 1;
  }
  
  if (y3 == 450) {
    ydirection3 = 0;
  }
  
  if (x3 > windowWidth * 3 / 4 && y3 > 400) {
    ydirection3 = -1;
  }
  
  if (x3 == 400) {
    ydirection3 = 0;
  }
  
  if (y3 == 400 && x3 > windowWidth * 3 / 4) {
    ydirection3 = 0;
  }

  //stone 4
  if (x4 < 1000) {
    x4+= 1;
  }
  y4+= ydirection4
  
  if (x4 > 70 && y4 < 330) {
    ydirection4 = 1;
  }
  
  if (y4 == 330) {
    ydirection4 = 0;
  }
  
  if (x4 > 150 && y4 > 290) {
    ydirection4 = -1;
  }
  
  if (y4 == 290) {
    ydirection4 = 0;
  }
  
  if (x4 > 270 && y4 < 360) {
    ydirection4 = 1;
  }
  
  if (y4 == 360) {
    ydirection4 = 0;
  }
  
  if (x4 > 385 && y4 > 300) {
    ydirection4 = -1;
  }
  
  if (y4 == 300) {
    ydirection = 0;
  }

  if (x4 > 480 && y4 > 230) {
    ydirection4 = -1;
  }
  
  if (y4 == 230) {
    ydirection4 = 0;
  }
  
  if (x4 > 585 && y4 > 210) {
    ydirection4 = -1
  }
  
  if (y4 == 210) {
    ydirection4 = 0;
  }
  
  //stone 5
  if (x5 < 600) {
    x5+= 1;
  }
  y5+= ydirection5
  
  if (x5 > 350 && y5 > 420) {
    ydirection5 = -1;
  }
  
  if (y5 == 420) {
    ydirection5 = 0;
  }
  
  if (x5 > 460 && y5 < 480) {
    ydirection5 = 1;
  }
  
  if (y5 == 480) {
    ydirection5 = 0;
  }
  
  if (x5 > 500 && y5 > 470) {
    ydirection5 = -1;
  }
  
  if (y5 == 470) {
    ydirection5 = 0;
  }
  
  //stone 6
  if (x6 < 950) {
    x6+= 1;
  }
  y6+= ydirection6
  
  if (x6 > 400 && y6 < 525) {
    ydirection6 = 1;
  }
  
  if (y6 == 525) {
    ydirection6 = 0;
  }
  
  //stone 7
  if (x7 < 1350) {
    x7+= 1;
  }
  y7+= ydirection7
  
  if (x7 > 80 && y7 > 560) {
    ydirection7 = -1;
  }
  
  if (y7 == 560) {
    ydirection7 = 0;
  }
  
  if (x7 > 130 && y7 > 510) {
    ydirection7 = -1;
  }
  
  if (y7 == 510) {
    ydirection7 = 0;
  }
  
  if (x7 > 535 && y7 > 435) {
    ydirection7 = -1;
  }
  
  if (y7 == 435) {
    ydirection7 = 0;
  }
  
  //stone 8
  if (x8 < 1100) {
    x8+= 1;
  }
  y8+= ydirection8
  
  if (x8 > 125 && y8 > 640) {
    ydirection8 = -1;
  }
  
  if (y8 == 640) {
    ydirection8 = 0;
  }
  
  if (x8 > 300 && y8 < 690) {
    ydirection8 = 1; 
  }
  
  if (y8 == 690) {
    ydirection8 = 0;
  }
  
  if (x8 > 500 && y8 > 615) {
    ydirection8 = -1;
  }
  
  if (y8 == 615) {
    ydirection8 = 0;
  }
  
  if (x8 > 600 && y8 > 600) {
    ydirection8 = -1;
  }
  
  if (y8 == 600) {
    ydirection8 = 0;
  }
  
  //stone 9
  if (x9 < 1200) {
    x9+= 1;
  }
  y9+= ydirection9

  if (x9 )

  //Stone Positions
  stone1.position(x1,y1);
  stone1.size(18,18);
  
  stone2.position(x2,y2);
  stone2.size(18,18);
  
  stone3.position(x3,y3);
  stone3.size(18,18);
  
  stone4.position(x4,y4);
  stone4.size(18,18);
  
  stone5.position(x5,y5);
  stone5.size(18,18);
  
  stone6.position(x6,y6);
  stone6.size(18,18);
  
  stone7.position(x7,y7);
  stone7.size(18,18);
  
  stone8.position(x8,y8);
  stone8.size(18,18);
  
  stone9.position(x9,y9);
  stone9.size(18,18);
  
  //Stone 1 trail
  stone1Trail.push({ x1, y1 });
  
  if (stone1Trail.length > trailLength1) {
    stone1Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(5);
  beginShape();
  for (let i = 0; i < stone1Trail.length; i++) {
    vertex(stone1Trail[i].x1, stone1Trail[i].y1);
  }
  endShape();
  
  //Stone 2 trail
  stone2Trail.push({ x2, y2 });
  
  if (stone2Trail.length > trailLength2) {
    stone2Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < stone2Trail.length; i++) {
    vertex(stone2Trail[i].x2, stone2Trail[i].y2);
  }
  endShape();
  
  //Stone 3 trail
  stone3Trail.push({ x3, y3 });
  
  if (stone3Trail.length > trailLength3) {
    stone3Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < stone3Trail.length; i++) {
    vertex(stone3Trail[i].x3, stone3Trail[i].y3);
  }
  endShape();
  
  //Stone 4 trail
  stone4Trail.push({ x4, y4 });
  
  if (stone4Trail.length > trailLength4) {
    stone4Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < stone4Trail.length; i++) {
    vertex(stone4Trail[i].x4, stone4Trail[i].y4);
  }
  endShape();
  
  //Stone 5 trail
  stone5Trail.push({ x5, y5 });
  
  if (stone5Trail.length > trailLength5) {
    stone5Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(5);
  beginShape();
  for (let i = 0; i < stone5Trail.length; i++) {
    vertex(stone5Trail[i].x5, stone5Trail[i].y5);
  }
  endShape();
  
  //Stone 6 trail
  stone6Trail.push({ x6, y6 });
  
  if (stone6Trail.length > trailLength6) {
    stone6Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < stone6Trail.length; i++) {
    vertex(stone6Trail[i].x6, stone6Trail[i].y6);
  }
  endShape();
  
  //Stone 7 trail
  stone7Trail.push({ x7, y7 });
  
  if (stone7Trail.length > trailLength7) {
    stone7Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < stone7Trail.length; i++) {
    vertex(stone7Trail[i].x7, stone7Trail[i].y7);
  }
  endShape();
  
  //Stone 8 trail
  stone8Trail.push({ x8, y8 });
  
  if (stone8Trail.length > trailLength8) {
    stone8Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < stone8Trail.length; i++) {
    vertex(stone8Trail[i].x8, stone8Trail[i].y8);
  }
  endShape();
  
  //Stone 9 trail
  stone9Trail.push({ x9, y9 });
  
  if (stone9Trail.length > trailLength9) {
    stone9Trail.shift();
  }
  
  noFill();
  stroke(244,164,96, 80);
  strokeWeight(3);
  beginShape();
  for (let i = 0; i < stone9Trail.length; i++) {
    vertex(stone9Trail[i].x9, stone9Trail[i].y9);
  }
  endShape();

  x1 = constrain(x1, 0, width - stone1.width);
  y1 = constrain(y1, 0, height - stone1.height);
  x2 = constrain(x2, 0, width - stone2.width);
  y2 = constrain(y2, 0, height - stone2.height);
  x3 = constrain(x3, 0, width - stone3.width);
  y3 = constrain(y3, 0, height - stone3.height);
  x4 = constrain(x4, 0, width - stone4.width);
  y4 = constrain(y4, 0, height - stone4.height);
  x5 = constrain(x5, 0, width - stone5.width);
  y5 = constrain(y5, 0, height - stone5.height);
  x6 = constrain(x6, 0, width - stone6.width);
  y6 = constrain(y6, 0, height - stone6.height);
  x7 = constrain(x7, 0, width - stone7.width);
  y7 = constrain(y7, 0, height - stone7.height);
  x8 = constrain(x8, 0, width - stone8.width);
  y8 = constrain(y8, 0, height - stone8.height);
  x9 = constrain(x9, 0, width - stone8.width);
  y9 = constrain(y9, 0, height - stone8.height);

}

setInterval(() => {
    let clockElement = document.querySelector('.clock');
    const now = luxon.DateTime.now().setZone("America/Los_Angeles");
    clockElement.innerText = now.toFormat("DD" + "\n" + "ttt");
}, 1000);

let clockElement = document.querySelector('.clock');
const now = luxon.DateTime.now().setZone("America/Los_Angeles");
clockElement.innerText = now.toFormat("DD" + "\n" + "ttt");