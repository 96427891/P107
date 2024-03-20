https://teachablemachine.withgoogle.com/models/UeKNbharw/     
;
function detect() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/UeKNbharw/"     , modelReady)
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error , results){
    if(error){
        console.error(error);
    }
    if(results){
        console.log(results);
    }
}