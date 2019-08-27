
var inputValue = document.querySelector("#sticker");

var valor = 0;

var btnLess = document.querySelector("#btnLess");

var btnAdd = document.querySelector("#btnAdd");



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



btnLess.addEventListener("click", function(){

	removeSticker();

})


btnAdd.addEventListener("click", function(){

	addSticker();

})