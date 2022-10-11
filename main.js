function preload() {
 sound = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(500, 450);
    background("darkblue");
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw() {

    image(video,0,0,500,450);
    
}

function play_button() {
    sound.play();
}