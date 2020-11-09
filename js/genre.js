//mes const
//const API_Key =a5e9ce910863d3be9153c337678e8460                    
 /*{
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Aventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comédie"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentaire"
    },
    {
      "id": 18,
      "name": "Drame"
    },
    {
      "id": 10751,
      "name": "Familial"
    },
    {
      "id": 14,
      "name": "Fantastique"
    },
    {
      "id": 36,
      "name": "Histoire"
    },
    {
      "id": 27,
      "name": "Horreur"
    },
    {
      "id": 10402,
      "name": "Musique"
    },
    {
      "id": 9648,
      "name": "Mystère"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science-Fiction"
    },
    {
      "id": 10770,
      "name": "Téléfilm"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "Guerre"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
} */


/* **   avoir  liste genre  ** */ 
//const url ='https://api.themoviedb.org/3/genre/movie/list?api_key=a5e9ce910863d3be9153c337678e8460&language=en-FR'
/* remp)lacer l id par un id pour avoir liste */
//const url ='https://api.themoviedb.org/3/list/<<id>>?api_key=a5e9ce910863d3be9153c337678e8460&language=en-FR'

/*
function movieSection(movies){
	return movies.map((movie) => {
    if (movie.poster_path){
        return `<img 
          src=${IMAGE_URL + movie.poster_path}
          data-movie-id=${movie.id}
      />`;
      }
	})
}
function createMovieContainer(movies){
  const movieElement= document.createElement('div');
  movieElement.setAttribute('class', 'movie')
  constmovieTemplate = `<section class="section">${movieSection(movies)}</section>
  <div class="content">
  <p id="content-close>xx</p>
  </div>`;
  movieElement.innerHTML = movieTemplate;
  return movieElement
}
button.onclick = function(event){
  event.preventDefault();
  const value = inputElement.value;
  const path='/list/28'
  const newUrl = generateUrl(path) + '&query=' + value; 

  fetch(newUrl)
    .then((res)=> res.json())
    .then(renderSearchMovies)       
    .catch((error) => {
      console.log('error:', error);
    });
    inputElement.value='';
console.log('value:' ,value);
}

document.getElementById('action').addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName.toLowerCase() ==='h3'){
    const movieId = target.dataset.movieId
    console.log('movie ID:',movieId)
  }

} )*/


const action = document.getElementById('actions');
const policier = document.getElementById('policiers');
//const url = `https://api.themoviedb.org/3${path}?api_key=a5e9ce910863d3be9153c337678e8460`



function generateUrl(path){
const url =`https://api.themoviedb.org/3/${path}?api_key=a5e9ce910863d3be9153c337678e8460&language=en-FR`
return url;
}
function createMovieContainer(movies){
	const movieElement =document.createElement('div');//ligne 74
	movieElement.setAttribute('class', 'movie');//ligne 74
	//ligne 76
	const movieTemplate =`<section class="section">${movieSection(movies)}</section>
	<div class="content" >
		<p id="content-close">xx</p>
	</div>
	`;
  movieElement.innerHTML = movieTemplate;
	return movieElement;
}
function renderSearchMovies(data){
  //data.result []
  moviesSearchable.innerHTML = '';
  const movies = data.results;
  const movieBlock = createMovieContainer(movies);
  moviesSearchable.appendChild(movieBlock) 
      console.log('data : ',data);
}

function resquestMovies(url , onComplete , onError){
  fetch(url)
  .then((res) => res.json())  
  .then(onComplete)
  .catch(onError);
}

function getActionMovie(){
  const path ='list/28';      //https://api.themoviedb.org/3/list/28?api_key=a5e9ce910863d3be9153c337678e8460&language=en-FR
  const url =generateUrl(path)
  requestMovies(url, rendersearchMovies,handleError);
}



function getPoliciers(){
  const path ='/list/80';
  const url =generateUrl(path);
  requestMovies(url, rendersearchMovies,handleError);
}
document.getElementById('policiers').addEventListener('click', (event)=>{
  const target = event.target;
  if (target.tagName.toLowerCase() === 'img'){
    const movieId = target.dataset.movieId
    console.log('movie ID:',movieId);
  }})



