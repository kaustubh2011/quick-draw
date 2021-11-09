function setup()
{
    canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(classifycanvas);
synth=window.speechSynthesis;
}
function clearcanvas()
{
background("white");
}
function preload()  
{
    classifier=ml5.imageClassifier('DoodleNet');
} 
function draw()
{
strokeWeight(5);
stroke("blue");
if(mouseIsPressed)
{
  line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function classifycanvas()
{
    classifier.classify(canvas,gotresult);
}
function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML="Label: "+results[0].label;
    document.getElementById("confidence").innerHTML="confidence: "+Math.round(results[0].confidence*100)+"%";
utterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}