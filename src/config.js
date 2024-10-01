
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4acab064360358f6bbe8f0179d5a14e3';
const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add('rmdb-header-collapse')
  } else {
    document.getElementById("navbar").classList.remove('rmdb-header-collapse')
  }
}