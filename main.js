Webcam.set({
    width : 350,
    height : 400,
    image_format : "jpeg",
    jpeg_quality : 90
});
    
camera = document.getElementById("cam");

Webcam.attach("#cam");

function pic(){
    Webcam.snap(function (data_uri){
document.getElementById("output").innerHTML = '<img id="HOORAH" src="'+data_uri+'">';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WlFz7NJWf/model.json', model);
 
function model(){
     console.log("Model is loaded.");

 } 

 function identify(){
     img = document.getElementById("HOORAH");
     
     classifier.classify(img, getResult);
 }

 function getResult(error, results){
     if (error){
         console.error(error);
     }
     else {
    console.log(results);
    document.getElementById("displayObject").innerHTML = results[0].label;
    document.getElementById("displayAccuracy").innerHTML = results[0].confidence.toFixed(3);
     }
 }