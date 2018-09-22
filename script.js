var popup = document.querySelector('.custom');
var btnclose = document.querySelector('.btn-close');

console.log(popup);
setTimeout(function open() {
  console.log('hello')
  popup.style.display = 'block';
}, 10000);
// C'est en millisecondes

var closePopeUp = function() {
  popup.style.display = 'none';
}

btnclose.addEventListener("click", closePopeUp);
