`use strict`
const btn = document.querySelector("#btn");
const result = document.querySelector(".info");
const generatUpFont = document.querySelector("#up");
const downFont = document.querySelector("#down");
const text = document.querySelector(".text");

function * createIdGenerator(){
    let id = 1;
    while(true){
        yield id++
    }
}
const idGenerator = createIdGenerator()
btn.addEventListener("click", () => {
	result.textContent = idGenerator.next().value;
});

function * newFontGenerator(font){
    while(true){
      let changes = yield font;
        if(changes === "up"){
            changes = yield  font += 2;
        }
        if(changes === "down"){
            changes = yield font -= 2;
        }
        changes = yield font;
    }
    
}
const fontGenerator = newFontGenerator(14);

generatUpFont.addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("up").value}px`;});
 
downFont.addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("down").value}px`;
});