function preload() {}

function setup() {
    canvas= createCanvas(1000,1000);
    canvas.position(700,300);

    video= createCapture(VIDEO); 
    video.hide();
}

function draw() {
    image(video, 82, 100, 550 ,325);
    
    rect(100,100, 500, 15);
      rect(100,420, 500, 15);
      rect(620, 100, 15, 330);
      rect(70, 100, 15, 330);
      fill("red");
      stroke("red");
    circle(80,107, 50, 50);
    circle(626, 108, 50, 50);
      circle(80,427, 50, 50);
    circle(626, 428, 50, 50);
      fill("blue");
     stroke("blue");
}