`use strict`
const audio = document.getElementById(`audio`);
const button = document.getElementById(`playPause`)
const neon = document.getElementById(`neon`)
const show = document.querySelector(`.container`)

const API_URL =  "https://swapi.dev/api/films/2/";


async function getHeroesInfo(url){
  const request = await fetch(url);
  const response = await request.json();
  const heroes = response.characters;

  for(let i = 0; i < heroes.length; i++){
      const request = await fetch(heroes[i]);
      const hero =  await request.json();
      
   const moviesEl = document.querySelector(".movies");
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <div class="movie__cover-inner">
    <img
      src="images/imgHero/${hero.name}.jpg"
      class="movie__cover"
      alt=""/></div>
         <div class="movie__info">
        <div class="movie__title">${hero.name}</div>
        <div class="movie__birth_year">${hero.birth_year}</div>
        <div class="movie__gender">${hero.gender}</div>
        </div>`
    moviesEl.appendChild(movieEl);

  }

}
getHeroesInfo(API_URL)


button.addEventListener("click", function() {
  return audio.paused ? audio.play() : audio.pause();
})

neon.addEventListener("click", function(){
  show.classList.toggle("active");
})