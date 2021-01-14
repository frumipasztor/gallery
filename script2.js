function _load(){

let swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});
}
window.addEventListener("load", _load);