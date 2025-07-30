let nodes = [];
let boundSize = 50;
let links;

function preload() {
  links = loadStrings("assets/externallinks.txt");
  let canvas = createCanvas();
  canvas.parent('overlay-container');
}

function setup() {
  createCanvas(windowWidth, windowHeight / 2);
  stroke(255);
  fill(0);
  textFont("Courier New");

  for (let i = 0; i < links.length; i++) {
    // split the text and the link, if anything goes wrong skip this set
    // probably a way more efficient way to do this, but ¯\_(ツ)_/¯
    let textlink = links[i].split('#->#');
    if (textlink.length != 2) continue;

    // x, y, speed, boundSize, text, link
    // nodes.push(new NavNode(
    //   constrain(randomGaussian(width / 2, 175), boundSize, width - boundSize),
    //   constrain(randomGaussian(height / 2, 150), boundSize, height - boundSize),
    //   random(0.0001, 0.005), boundSize,
    //   textlink[0].trim(), // text
    //   textlink[1].trim() // link
    // ));
    nodes.push(new NavNode(
      constrain(randomGaussian(width / 2, 350), boundSize * 2, width - boundSize * 2),
      constrain(randomGaussian(height / 2, 400), boundSize * 2, height - boundSize * 2),
      random(0.0001, 0.005), boundSize,
      textlink[0].trim(), // text
      textlink[1].trim() // link
    ));
  }
}


function draw() {
  clear();
  
  // draw connection lines between link nodes
  for (let i = 0; i < nodes.length; i++) {
    
    // draw connection lines between top of sketch and link nodes
    //line(width / 2, 0, nodes[i].x, nodes[i].y);
    
    nav = nodes[i];
    
    r = floor(randomGaussian(i, 1)) % nodes.length;
    if (r < 0) r = 0;
    
    // draw to random node
    line(nav.x, nav.y, nodes[r].x, nodes[r].y);
    
    // draw to next node in cycle
    line(nav.x, nav.y, nodes[(i + 1) % nodes.length].x, nodes[(i + 1) % nodes.length].y);
  }

  // draw link nodes - separate loop to keep them drawn on top
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].update();
  }
}

function mousePressed() {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].clicked();
  }
}
