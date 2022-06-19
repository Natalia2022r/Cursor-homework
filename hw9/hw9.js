"use strict"
const btn = document.querySelector(`#button`)
const box = document.querySelector(`#box`)


function generatColor(){
return Math.floor(Math.random() * 256);}

function getRandomColor(){
  return `rgb(${generatColor()}, ${generatColor()}, ${generatColor()})`;
}

function generateBlocks () {
	for (let i = 0; i < 25; i++) {
		let boxis = document.createElement("div")
		boxis.className = "boxis"
		boxis.style.cssText = `
        display: inline-block;
        width: 50px;
        height: 50px;
		background-color: ${getRandomColor()};`;
    box.appendChild(boxis)
   }

  
}
btn.addEventListener(`mouseenter`, generateBlocks, {'once': true});

function generateBlocksInterval () {
  	let block = document.querySelectorAll(".boxis")
	setInterval(() => block.forEach(el => el.style.backgroundColor = `${getRandomColor()}`), 1000)
}

btn.addEventListener("click", () => {
    generateBlocksInterval();
   
      })

