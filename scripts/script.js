// document.getElementById("my-name").onmouseenter = function(){displayText()};

// function displayText() {
    

// }

// function mouseEnter() {
//   document.getElementById("my-name").style.color = "blue";
// }

// function mouseLeave() {
//   document.getElementById("my-name").style.color = "black";
// }

// document.getElementById("my-name").onmouseenter = function(){mouseEnter()};
// document.getElementById("my-name").onmouseleave = function(){mouseLeave()};


// function randomColor(){
//      color='rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+',0.5)';

//      return color;
// }


// document.getElementsByClassName('box').style.backgroundColor = 'rgba('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+',0.5)';


function bgRandomColor() {
  var elements = document.getElementsByClassName('box');
  for( i=0 ; i < elements.length; i++) {
  	r = Math.round(Math.random()*255);
  	g = Math.round(Math.random()*255);
  	b = Math.round(Math.random()*255);
  	a = 0.1;
    elements[i].style.backgroundColor = 'rgba('+r+','+g+','+b+','+a+')';
  }
}

// bgRandomColor();