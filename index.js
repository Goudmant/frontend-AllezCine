//ma api kley a étée utilisée dans  navigateur a la suite de:
// https://api.themoviedb.org/3/movie/76341?api_key=
const API_KEY = 'a5e9ce910863d3be9153c337678e8460';
// jeton v4 auth 
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU5Y2U5MTA4NjNkM2JlOTE1M2MzMzc2NzhlODQ2MCIsInN1YiI6IjVmYTE1ZDg1MGMxMjU1MDAzNzI3N2MxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wh2Xh_ffGQ2GWqZ9-W3DHMva1VEAkXSFP9UwXXPGNoo

  //--url 'https://api.themoviedb.org/3/movie/76341' \
  //--header 'Authorization: Bearer <<access_token>>' \
  //--header 'Content-Type: application/json;charset=utf-8'

const endpoint='https://api.themoviedb.org/3/search/movie?api_key=a5e9ce910863d3be9153c337678e8460&query=furious&page=2'

//select element DOM
const inputElement = document.querySelector('#inputValue');
const button = document.querySelector('#search')
button.onclick = function(event){
  event.preventDefault();
  const value = inputElement.value;
  console.log('value:' ,value)
} 
/////////////////// menu déroule /////////////////
(function() {
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
})(); 
////////////menu deroule fin /////////////// 