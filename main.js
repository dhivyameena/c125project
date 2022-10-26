difference=0;
leftWristX=0;
rightWristX=0;

function setup() {
    canvas=createCanvas(550, 500);
    canvas.position(560, 200);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('model is loaded');
}

function draw() {
    background('#ffc0c0');
    document.getElementById("font-size").innerHTML="font size of the text will be: " + difference + "px";
    textSize(difference);
    fill('#566fff');
    text('Dhivya', 50, 100);
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

      
    }
}