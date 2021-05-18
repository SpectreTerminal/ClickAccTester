const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
let difficulty = 1;
var target;
let accuracy = 0;
let numHit = 0;
let numTargets = 0;
let timer;
let score;

/**
 * Setup
 */
function setup() {
    createCanvas(WIDTH, HEIGHT);
    target = new Circle(difficulty, WIDTH, HEIGHT);
    timer = new Timer(20 * difficulty);
    // set the interval to call the timer to 1 second
    setInterval(countdown, 1000);
}

/**
 * Draw to canvas
 */
function draw() {
    if (!timer.timeout()) {
        background(0);
        textSize(14);
        fill(255, 255, 255);
        text("Click on the targets as they show up.", WIDTH / 4, 15);
        text("Accuracy: " + accuracy + "%", 0, 15);

        text("Time remaining: " + timer.toString(), 3 * WIDTH / 4, 15);
        target.show();
    }
    else {
        fill(255, 255, 255);
        text("Time's up!", WIDTH / 2, HEIGHT / 2 - 50);
        text("Your accuracy: " + accuracy + "%", WIDTH / 2, HEIGHT / 2 - 25);
        text("Number of targets hit: " + numHit, WIDTH / 2, HEIGHT / 2);
        // calculate score and write to canvas
        displayScoreStatus();
    }
}

/**
 * Mouse pressed action
 */
function mousePressed() {
    if (!timer.timeout()) {
        numTargets += 1;
        if (target.isClick(mouseX, mouseY)) {
            numHit += 1;
        }
        // recalculate accuracy
        accuracy = round((numHit / numTargets) * 100, 2);
        // pick a new location, regardless of whether the target was clicked
        target.pickNewLocation();
    }
}

/**
 * Decrement the timer.
 */
function countdown() {
    if (!timer.timeout()) {
        timer.decrement();
    }
}

/**
 * Display score status
 */
function displayScoreStatus() {
    score = round(numHit * 10  * accuracy / (4 - difficulty), 2);
    text("Score: " + score, WIDTH / 2, HEIGHT / 2 + 25);
    if (score > 25000) {
        text("Well done!", WIDTH / 2, HEIGHT / 2 + 50);
    }
    else if (score > 10000) {
        text("Try getting a score of at least 25000!", WIDTH / 2, HEIGHT / 2 + 50);
    }
    else {
        text("Try again, see if you can do better!", WIDTH / 2, HEIGHT / 2 + 50);
    }
}