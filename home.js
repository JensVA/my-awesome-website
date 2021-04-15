console.log('Jens')
//alert('yo');

document.getElementById("someText").innerHTML = 'Hey There';

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

var background = 0;
function myFunction(){
  if(background%2==0){
    document.getElementById("body").style.background = "red";
  }
  else{
    document.getElementById("body").style.background = "green";
  }
  background++;
}
