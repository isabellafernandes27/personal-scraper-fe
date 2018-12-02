var form = document.querySelector('form');
var button = document.querySelector('.submit-btn')
var spinner = document.querySelector('.spinner')
var inputField = document.querySelector('#input-field');
var image1 = document.querySelector('#image1');
var image2 = document.querySelector('#image2');
var image3 = document.querySelector('#image3');
var image4 = document.querySelector('#image4');

button.addEventListener("click", function(event) {
  event.preventDefault();
  var keyword = inputField.value;
  getImages(keyword);
})

function getImages(keyword) {
  button.value = `Working on it... ${keyword}`

  fetch(`http://localhost:3000/history/${keyword}`)
    .then(response => response.json())
    .then(images => updateImages(images))
    .then(() => button.value = "Get My Info")
    .then(() => clearInput())
    .catch(error => console.error("sorry, please try again."));
}

function clearInput() {
  inputField.value = "";
}

function updateImages(images) {
  image1.src = images[0];
  image2.src = images[1];
  image3.src = images[2];
  image4.src = images[3];
}
