Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'"/>';
    });
}
console.log('ml5.version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rnb0lLbFT/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function check(){
    img=document.getElementById('capture');
    classifier.classify(img,gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_of_person").innerHTML=results[0].label;
        document.getElementById("accuracy_of_person").innerHTML=results[0].confidence.toFixed(2);
    }
}