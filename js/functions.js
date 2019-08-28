
const inputValue = document.querySelector("#sticker");

var valor = 0;

const btnLess = document.querySelector("#btnLess");

const btnAdd = document.querySelector("#btnAdd");

const btnSubmit = document.querySelector("#submit");




function addSticker(){

	inputValue.value = isNaN(inputValue.value ) ? 0 : inputValue.value;

    valor++;

    inputValue.value = valor

}


function removeSticker(){

	if(inputValue.value > 0){

    inputValue.value = isNaN(inputValue.value) ? 0 : inputValue.value;
    
    valor--;

    inputValue.value = valor;

  	}

}	

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



btnLess.addEventListener("click", function(){

	removeSticker();

})


btnAdd.addEventListener("click", function(){

	addSticker();

})

btnSubmit.addEventListener("click", async function(event){

	event.preventDefault();

	let spanMessage = document.querySelector("#success");

	spanMessage.style.display = "block";

	await sleep(2000);

	spanMessage.style.display = "none";


});