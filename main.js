var sr = window.webkitSpeechRecognition;
var r = new sr() ;
function Result() {
    document.getElementById("textbox").innerHTML="";
    r.start();
}
r.onresult=function(event){
    console.log(event);
    Dabba = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=Dabba;
if (Dabba =="take my selfie"){
    console.log("taking selfie-----");
    speak();
}
console.log(Dabba);


}

function speak(){
    synthdabba  = window.speechSynthesis;
     textdabba =   "Taking Your Selfie in Just 5 seconds";
     utterdabba = new SpeechSynthesisUtterance(textdabba);
     synthdabba.speak(utterdabba);
    Webcam.attach(camera);
     setTimeout(function(){
          ts1();
          s();
     },5000);
     setTimeout(function(){
        ts2();
        s();
   },6000);
   setTimeout(function(){
    ts3();
    s();
},7000);
}

camera= document.getElementById("Web_Camera");

Webcam.set({
    width:360,
    height:250,
    image_format:"jpg",
    jpg_quality: 100
});

function ts1(){
Webcam.snap(function(data_uri){
    document.getElementById("r1").innerHTML='<img id="Photo" src="'+data_uri+'">';
}

function  s(){
    abidda = document.getElementById("link");
    image =  document.getElementById("Photo").src ;
    abidda.href=image ;
    abidda.click();
}



function ts2(){
    Webcam.snap(function(data_uri){
       
        document.getElementById("r2").innerHTML='<img id="Photo" src="'+data_uri+'">';
        
    
    });

    function ts3(){
        Webcam.snap(function(data_uri){
            
            document.getElementById("r3").innerHTML='<img id="Photo" src="'+data_uri+'">';
