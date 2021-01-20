const scroll_indicator = document.querySelector('.scroll-indicator');
window.onscroll = function(){
let offsetY =  document.body.scrollTop;
  let height = document.documentElement.scrollHeight - document.body.clientHeight;
  let scrolled = (offsetY / height) * 100;
  scroll_indicator.style.width = scrolled+"%";
}

