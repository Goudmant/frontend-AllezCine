//ma api kley a étée utilisée dans  navigateur a la suite de:
// https://api.themoviedb.org/3/movie/76341?api_key=
// 'a5e9ce910863d3be9153c337678e8460';

 
const API_KEY = 'a5e9ce910863d3be9153c337678e8460';
const IMAGE_URL ='https://image.tmdb.org/t/p/w500'

const url ='https://api.themoviedb.org/3/search/movie/?api_key=a5e9ce910863d3be9153c337678e8460'

//select element DOM
const inputElement = document.querySelector('#inputValue');
const button = document.querySelector('#search');
const moviesSearchable =document.querySelector('#movies-searchable');

function generateUrl(path){
  const url = `https://api.themoviedb.org/3${path}?api_key=a5e9ce910863d3be9153c337678e8460`
  return url;
}

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
//commence ici
button.onclick = function(event){
  	event.preventDefault();
  	const value = inputElement.value;
    const path='/search/movie'
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

function createIframe(video){
  const iframe =document.createElement('iframe');
  iframe.src =`https://www.youtube.com/embed/${video.key}`;
  iframe.width=300;
  iframe.height=250;
  iframe.allowFullscreen=true;
  return iframe;
}
// event delegation
document.onclick = function(event) {
 
  const target = event.target;
 
  if (target.tagName.toLowerCase() === 'img'){
  const movieId = target.dataset.movieId
  console.log('movie ID:',movieId);
  const section = event.target.parentElement; 
  const content = section.nextElementSibling;
  content.classList.add('content-display');
  
  const path =`/movie/${movieId}/videos`;
  const url = generateUrl(path);
  //fetch movie videos
    fetch(url)
      .then((res) => res.json())
      .then((data) => { 
        // TODO
        //display movie videos
        console.log('videos:', data);
        const videos =data.results; 
        const length =videos.length > 2 ? 2 : videos.length;
        const iframeContainer = document.createElement('div');
        
        for (let  i = 0; i< length; i++ ){ 
          const video = videos[i];
          const iframe = createIframe(video);
          iframeContainer.appendChild(iframe);
          content.appendChild(iframeContainer)
        }
      })
      .catch((error)=> {
        console.log('Error:',error);
      })
  }

  if (target.id == 'content-close'){
    const content = target.parentElement;
    content.classList.remove('content-display'); 
  }
}






/////////////////// menu déroule /////////////////
/* */
////////////menu deroule fin /////////////// 