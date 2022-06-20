
'use strict';
const button = document.querySelectorAll(".sound");
const audio = document.querySelectorAll("audio");

function clear() {
    
    for(let i = 0; i < button.length; i++) {
        if(button[i].classList.contains("playing")) 
         button[i].classList.remove("playing");
        

        }
    }


for(let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        clear();
        let id = this.id;
        this.classList.add("playing");
        for(let j = 0; j < button.length; j++) {
            if(audio[j].id == id) {
                audio[j].currentTime = 0;
                return audio[j].paused ? audio[j].play() : audio[j].pause();
            }
        }
    });
}


   document.addEventListener("keydown", function(event) {
    if (event.repeat) return;
        clear();
    let code = event.code;
        for(let i = 0; i < button.length; i++) {
        if(button[i].id == code) {
        button[i].classList.add("playing");
        }
    }

    for(let j = 0; j < button.length; j++) {
        if(audio[j].id == code) {
            audio[j].currentTime = 0;
            return audio[j].paused ? audio[j].play() : audio[j].pause();
        }
    }
});
