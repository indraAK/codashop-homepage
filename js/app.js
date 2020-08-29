$('.banner__container').slick({
   dots: true,
   autoplay: true,
   autoplaySpeed: 5000,
});


const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');
const input = document.getElementById('input');

searchBtn.addEventListener('click', () => {
   searchForm.classList.toggle('show');
   input.focus();
   searchBtn.querySelector('.fa-search').classList.toggle('active');
});

const toTop = document.getElementById('notif');

toTop.addEventListener('click', () => {
   window.scroll({
      top: 0,
      lef: 0,
      behavior: 'smooth'
   })
});