`use strict`
const audio = document.getElementById(`audio`);
const button = document.getElementById(`playPause`)


button.addEventListener("click", function() {
       return audio.paused ? audio.play() : audio.pause();
})

const API_URL =  "https://swapi.dev/api/films/2/";


getMovies(API_URL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  console.log(respData);
return respData
}

const characters = respData.characters.map(elem =>{
       async function character(elem) {
              const resp = await fetch(elem);
              const character = await resp.json();
              console.log(character);    
}
}
)


function showMovies(data) {
  const moviesEl = document.querySelector(".movies");
  document.querySelector(".movies").innerHTML = "";

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <div class="movie__cover-inner">
        <img
          src="${movie.posterUrlPreview}"
          class="movie__cover"
          alt="${movie.nameRu}"
        />
        <div class="movie__cover--darkened"></div>
      </div>
      <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map(
          (genre) => ` ${genre.genre}`
        )}</div>
        ${
          movie.rating &&
          `
        <div class="movie__average movie__average--${getClassByRate(
          movie.rating
        )}">${movie.rating}</div>
        `
        }
      </div>
        `;
    moviesEl.appendChild(movieEl);
  });
}
