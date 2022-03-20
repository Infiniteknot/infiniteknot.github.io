var myimage = document.querySelector('img');

myimage.onclick = function(){
let mysrc = myimage.getAttribute('src');
if(mysrc === 'flour3.jpg'){
    myimage.setAttribute('src','flour4.jpg');
    }else{
    myimage.setAttribute('src','flour3.jpg');
    }
}
var myImage = document.querySelector('img');

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  