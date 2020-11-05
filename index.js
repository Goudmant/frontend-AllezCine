//ma api kley a étée utilisée dans  navigateur a la suite de:
// https://api.themoviedb.org/3/movie/76341?api_key=
// 'a5e9ce910863d3be9153c337678e8460';
// jeton v4 auth 
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU5Y2U5MTA4NjNkM2JlOTE1M2MzMzc2NzhlODQ2MCIsInN1YiI6IjVmYTE1ZDg1MGMxMjU1MDAzNzI3N2MxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wh2Xh_ffGQ2GWqZ9-W3DHMva1VEAkXSFP9UwXXPGNoo

  //--url 'https://api.themoviedb.org/3/movie/76341' \
  //--header 'Authorization: Bearer <<access_token>>' \
  //--header 'Content-Type: application/json;charset=utf-8'

const API_KEY = 'a5e9ce910863d3be9153c337678e8460';
const IMAGE_URL ='https://image.tmdb.org/t/p/w500'

const url ='https://api.themoviedb.org/3/search/movie/?api_key=a5e9ce910863d3be9153c337678e8460'

//select element DOM
const inputElement = document.querySelector('#inputValue');
const button = document.querySelector('#search');
const moviesSearchable =document.querySelector('#movies-searchable');


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
   	const newUrl = url + '&query=' + value; 

    fetch(newUrl)
      .then((res)=> res.json())
      .then(renderSearchMovies)       
      .catch((error) => {
        console.log('error:', error);
      });
      inputElement.value='';
  console.log('value:' ,value);
}
document.onclick = function(event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === 'img'){
  console.log('hellooo');
  }
}



// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});


/////////////////// menu déroule /////////////////
/*(function() {
  var tabMenu = document.querySelectorAll('.deroule');
  var tabD = document.querySelectorAll('ul ul');
  function deroule(e){
    e.stopPropagation(); 
    obj = this.querySelector('ul');
    if(!this.open){
      tabMenu.forEach(ferme);
      obj.style.display = "block";
      this.open = true;
    }else{
      obj.style.display = "none";
      this.open = false;
    }
  }
  var ferme = function(obj,i){
    tabD[i].style.display = "none";
    obj.open = false;
  }
  var init = function(obj){
    obj.addEventListener("click",deroule);
    obj.open = false;
  }
  tabMenu.forEach(init);
  window.addEventListener("click",function(){
    tabMenu.forEach(ferme);
  });
  window.addEventListener("scroll",function(){
    tabMenu.forEach(ferme);
  });
})(); */
////////////menu deroule fin /////////////// 