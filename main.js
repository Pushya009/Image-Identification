status="";
results_array=[];

function preload(){
    img=loadImage("dog.webp");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    detector=ml5.objectDetector('cocossd',modelloaded);
}

function draw(){
    image(img,0,0,500,500);
    if(status != ""){
        for(var i=0;i<results_array.length;i++){
            name=results_array[i].label;
            percentage=floor(results_array[i].confidence*100);
            x=results_array[i].x-20;
            y=results_array[i].y-20;
            fill(255,0,0);
            text(name+" "+percentage+"%",x+20,y+20);
            noFill();
            stroke(255,0,0);
            height=results_array[i].height;
            width=results_array[i].width;
            rect(x,y,width,height);
        }
    }
}

function modelloaded(){
    console.log("Yay ! Your First CoCoSsd Model Is Inesalised");
    status=true;
    detector.detect(img,getResults);
    document.getElementById("status").innerHTML="Status = Detecting Object";
}

function getResults(error,results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
        results_array=results;
    }
}