const planetArray = ['https://nineplanets.org/wp-content/uploads/2020/03/mars.png', 'http://clipart-library.com/new_gallery/11-119709_mars-png-clip-art-transparent-background-mars-png.png',  'https://www.nicepng.com/png/detail/441-4410783_transparent-mars.png'];
//images for every planet 
const scoreId = document.querySelector("#score"); //its a id in the html
let score = 0;
//the score is 0
function addScore() {
  score++;
  scoreId.innerText = score;
} //basically ++ is add 1

const planets = document.querySelector("#planets");
planets.addEventListener("click", addScore); //click on the planet to get a point wow im sure you knew this already


function movePlanets(){
  planets.style.top = Math.random()*500+'px'; //moves 500+ pixels top
  planets.style.left = Math.random()*1300+'px'; //moves 1300+ pixels left

  var randomNum = Math.floor(Math.random()*planetArray.length); //getting a random image from the planet array
  var newPlanet = planetArray[randomNum]; //newplanet is basically randomnumber

  planets.src = newPlanet; //the planets images will come for the new planets that appear randomly or when it gets clicked

}

setInterval(movePlanets,1000); //moves per 1sec
//document.queryselctor > document.getelementbyid
function gameOver() {
	document.querySelector("#gameOver").style.display = 'block';
	planets.style.display = 'none';
} //look in the html for game over text

setTimeout(gameOver,10000); //unable to do anything inside the tab for timeout
