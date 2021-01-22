const scroll_indicator = document.querySelector('.scroll-indicator');
window.onscroll = function(){
let offsetY =  document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (offsetY / height) * 100;
  scroll_indicator.style.width = scrolled+"%";
}
