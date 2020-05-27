let elementArr = []
let newArr;
let elementAdd;
let howRandom;
let randomC;
let winner;
let updateButton = document.getElementById('updateDetails');
let favDialog = document.getElementById('favDialog');
let outputBox = document.querySelector('output');
let deleteButton = document.getElementById('deleteEl');
let selectEl = document.querySelector('select');
let list = document.getElementById('elementsroulette')
let deleteElement;
let textBox = document.getElementById('element');
let textBoxEvent = document.getElementById('element');
let addButton = document.getElementById('add');
let randomButton = document.getElementById('random');
let information = document.querySelector('.information')
let drawElements = document.querySelector('.sekcja_info')
let drawArray = document.querySelector('#elements')
let winnerP = document.querySelector('#wygrana')
let randomP = document.querySelector('#randomElement')
let minValue = 0;

function addingNewElement() {
	if (textBox.value.length > minValue) {
		elementAdd = textBox.value;
		elementArr.push(elementAdd);
		console.log(elementArr)
		textBox.value = ""
		newArr = elementArr.join(", ")
		drawElements.innerHTML = "Twoje elementy to: "
		drawArray.innerHTML = newArr;
		information.innerHTML = "";
	} else {
		information.innerHTML = "Oj! Chyba zapomniałeś wprowadzić elementu";
	}
}

function randomFunction() {
	howRandom = elementArr.length;
	console.log(howRandom)
	randomC = Math.floor(Math.random() * howRandom);
	winner = elementArr[randomC];
	console.log(randomC)
	randomElement.innerHTML = "Wylosowany element to: "
	winnerP.innerHTML = winner;
	if (elementArr.length == 0) {
		randomElement.innerHTML = ""
		winnerP.innerHTML = "";
		information.innerHTML = "Wprowadź chociaż jeden element, żeby losować!"
	} else {
		information.innerHTML = " "
	}
}
updateButton.addEventListener('click', function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("Twoja przeglądarka nie obsługuje tej opcji :(");
  }
});
selectEl.addEventListener('change', function onSelect(e) {
	deleteButton.addEventListener('click', function onClick(e){

		deleteElement = selectEl.value;
			for (let i=0;i<elementArr.length;i++) {
				if (elementArr[i] == deleteElement) {
					elementArr.splice(i, 1);

				}
			}
			drawArray.innerHTML = elementArr;
		}
	)

});
favDialog.addEventListener('close', function onClose() {
	list.innerHTML=""
});
function addingToList(){
	for(let i=0;i<elementArr.length;i++){
	let opt = document.createElement('option')
	console.log(opt)
	opt.appendChild( document.createTextNode(elementArr[i]) );
	opt.value = elementArr[i]; 
// list.innerHTML=""
list.appendChild(opt);
	}
}

	updateButton.addEventListener('click', addingToList);
	randomButton.addEventListener('click', randomFunction)
	addButton.addEventListener('click', addingNewElement)
	