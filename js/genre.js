//mes const
const API_Key =a5e9ce910863d3be9153c337678e8460                    
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
const url ='https://api.themoviedb.org/3/genre/movie/list?api_key=a5e9ce910863d3be9153c337678e8460&language=en-FR'
/* remp)lacer l id par un id pour avoir liste */
const url ='https://api.themoviedb.org/3/list/<<id>>?api_key=a5e9ce910863d3be9153c337678e8460&language=en-US'


fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=a5e9ce910863d3be9153c337678e8460&language=en-FR') 
.then(reponse =>
  reponse.json()).then(data=> {
  data.genres.forEach(e => {
    genreList.push({"id":e.id,"name":e.name})
  });
});

function nameGenre(object,id){
  genreListe.forEach(e => {
    if(id === e.id){
      object.genre_name= e.name;  
    }
  })
}