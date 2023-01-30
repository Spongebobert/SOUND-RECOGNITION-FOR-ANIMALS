function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7vK7Q_BF2/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(results,error){
    if(error){
        console.error(error);
    }
    else
    console.log(results);
}