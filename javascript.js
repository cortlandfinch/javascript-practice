// this function makes the box grow big
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});

// this function makes the box turn blue
document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "Blue";

});

// this function makes the box fade
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("box").style.opacity = 0;

});

// this function makes the box fade in
document.getElementById("button4").addEventListener("click", function(){
    
    document.getElementById("box").style.borderRadius = "50%";

});

// this function makes the box 2 boxes
document.getElementById("button5").addEventListener("click", function(){
    
    document.getElementById("box").style.height = "25px";
    document.getElementById("box").style.width = "25px";

});


// this function makes the box reset to orginial form
document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "Orange";
    document.getElementById("box").style.opacity = 1;
    document.getElementById("box").style.borderRadius = "0%";

});