
const welcome = document.getElementById('questionText');
const bodyBcg = document.querySelector('body');
const questionBox = document.getElementById('inputDisplay');
const animation = document.getElementsByClassName('storedChar');

var ready = prompt("are you ready?");
if (ready === "yes") {
    confirm("Ok! Lets do this!");
} else if (ready === "no") {
    confirm("Bye!");
} else {
    alert("enter yes or no!");
}
console.log(ready);

var character = prompt("choose your class; warrior, wizard, cleric");
 if (character === "warrior" || "wizard" || character === "cleric") {
     confirm("You are A " + character + " .");
 } else {
     alert("choose one of the 3!");
 }
console.log(character);

//creates a new object and stores character traits
function createObject(propName, propValue){
    this[propName] = propValue;
    this[propName] = propValue;
    this[propName] = propValue;
}
var player = new createObject('playerType',character, 'weaponType', weapon, 'age', age, );

console.log(player);


// text based on selection
function infoText() {
    welcome.innerHTML = "Welcome " + character + "!";
    questionText.style.color = "yellow";
}

//bck color based on character class
function iconColor() {
    if (character === "warrior") {
        bodyBcg.style.backgroundColor = "red";
        questionBox.style.backgroundImage = "url('images/odin.jpg')";

    } else if (character === "wizard") {
        bodyBcg.style.backgroundColor = "blue";
        questionBox.style.backgroundImage = "url('images/wizard.jpg')";
    } else if (character === "cleric") {
        bodyBcg.style.backgroundColor = "purple";
        questionBox.style.backgroundImage = "url('images/cleric.jpg')";
    }
}

function iconImg() {
    if (character === "warrior") {
        questionBox.style.backgroundImage = "odin.jpg";
    }
}


iconColor();
infoText();


// creates the weapon field
var weapon = prompt("hello " + character + " choose your weapon");

//appends a key value pair to the player object
player["weaponType"] = weapon; 
console.log(weapon);

// creates the age field
var age = prompt("hello " + character + " who is armed with " + weapon + " how old are you?");
//appends a key value pair to the player object
player["age"] = age; 
console.log(age);

// document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // give new div a class
      newDiv.setAttribute('class', 'storedChar');
  // and give it some content 
  var newContent = document.createTextNode("You are a  " + player["playerType"] + " !" + " You are currently " + player["age"] + " years old and armed with a " + player["weaponType"] + " !"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

function animateDiv () {
    $(document).ready(function(){
        $("animation").slideDown("slow");
      });
        
      
}

addElement();
animateDiv();


