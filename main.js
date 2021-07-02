var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition; 

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        console.log("taking your selfie---");
       speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    var speakData="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);

 setTimeout(function(){
     takeSnapshot();
     save();
 },5000);
}
camera=document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("snap").src;
    link.href=image;
    link.click();
}