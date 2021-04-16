var randomimage = 2;

function backgroundBeige(){
  document.getElementById("body").style.backgroundColor = "rgb(" + 247 + "," + 247 + "," + 242 + ")";
}

function backgroundRed(){
  document.getElementById("body").style.backgroundColor = "red";
}

function backgroundGreen(){
  document.getElementById("body").style.backgroundColor = "green";
}

function backgroundBlue(){
  document.getElementById("body").style.backgroundColor = "lightskyblue";
}

function backgroundSelected(){
  document.getElementById("body").style.backgroundColor = document.getElementById("input_color").value;
}

function backgroundManual(){
  document.getElementById("body").style.backgroundColor = "rgb(" + document.getElementById("input_R").value + "," + document.getElementById("input_G").value + "," + document.getElementById("input_B").value + ")";
}

function randomImage(){
  var width = document.getElementById("width").value;
  var height = document.getElementById("height").value;
  if(width==0)width = 300;
  if(height==0)height = 200;

  document.getElementById("randomimage_pic").src= "https://picsum.photos/" + width + "/" + height +"?random=" + randomimage;
  randomimage++;
}

function resetImage(){
  document.getElementById("randomimage_pic").src= "https://picsum.photos/300/200?random=" + randomimage;
  randomimage++;
}
