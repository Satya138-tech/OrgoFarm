const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.inputsearch');


searchBtn.addEventListener('click', function(){
  console.log(search.classList.contains('active'));
  if(search.classList.contains('active')){
    searchBox.value = ''
  }
  else {
    search.classList.add('active');
    searchBox.focus();
  }
})
