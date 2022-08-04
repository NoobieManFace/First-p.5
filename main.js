function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill("red");
    circle(45, 50, 80);
    circle(595, 50, 80);
    circle(45, 430, 80);
    circle(595, 430, 80);
    fill("yellow");
    rect(80, 33, 480, 25);
    rect(80, 420, 480, 25);
    rect(30, 90, 25, 300);
    rect(585, 90, 25, 300);
}
function take_snapshot() {
    save("Suss.png");
}
function apply_filter() {

    tint_color = document.getElementById("color").value;
}