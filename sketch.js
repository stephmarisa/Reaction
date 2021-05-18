
var size = 300;
var numSeeds = 20;
var currCanvas;
var nextCanvas;

var dA = 1;
var dB = .5;
var f = 0.0545;
var k = 0.062;

function setup() {
  createCanvas(size, size);
  pixelDensity(1);
  currCanvas = [];
  nextCanvas = [];
  for (var x = 0; x < width; x++) {
    currCanvas[x] = [];
    nextCanvas[x] = [];
    for (var y = 0; y < height; y++) {
      currCanvas[x][y] = { a: 1, b: 0 };
      nextCanvas[x][y] = { a: 1, b: 0 };
    }
  }
 
  //create randomized seed areas
  for (var seed = 0; seed < numSeeds; seed++){
    randi = floor(Math.random()*size)
    randj= floor(Math.random()*size)
    for (var i = randi; i < randi+10; i++) {
      for (var j = randj; j < randj+10; j++) {
        currCanvas[i][j].b = 1;
      }
    }
  }
}

function draw() {
  background(50);

  //core formula and functionality
  for (var x = 1; x < width - 1; x++) {
    for (var y = 1; y < height - 1; y++) {
      var a = currCanvas[x][y].a;
      var b = currCanvas[x][y].b;
      aPrime = a + dA * laplace(x, y, 'a') - (a * b * b) + f * (1 - a);
      bPrime = b + dB * laplace(x, y, 'b') + (a * b * b) - (k + f) * b;
      nextCanvas[x][y].a = aPrime;
      nextCanvas[x][y].b = bPrime;
    }
  }

  //create graphics
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var index = 4 * (x + y * width);
      var a = nextCanvas[x][y].a;
      var b = nextCanvas[x][y].b;
      var c = floor(200-((a-b) * 200));
      c = constrain(c, 0, 255);
      pixels[index + 0] = c+80;
      pixels[index + 1] = c+10;
      pixels[index + 2] = c;
      pixels[index + 3] = 240;
    }
  }
  updatePixels();

  var temp = currCanvas;
  currCanvas = nextCanvas;
  nextCanvas = temp;
}

//compute the laplace using a preset 3x3 convolution matrix
function laplace(x, y, chemical){
  laplacianMatrix = [[.05, .2, .05], [.2, -1, .2], [.05, .2, .05]];
   var sum = 0;
  if (chemical == 'a') {
    for (var i = -1; i < 2; i++){
      for (var j = -1; j < 2; j++){
       sum += currCanvas[x+j][y-i].a * laplacianMatrix[i+1][j+1]
      }
    }
  }
  else {
    for (var i = -1; i < 2; i++){
      for (var j = -1; j < 2; j++){
       sum += currCanvas[x+j][y-i].b * laplacianMatrix[i+1][j+1]
      }
    }
  }
  return sum;
}
