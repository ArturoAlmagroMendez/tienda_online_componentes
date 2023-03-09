
$(document).ready(function(){
    $('.flip').click(function(){
      $('.cont-flip').toggleClass('flipped');
      return false;
    });
  });
  
  document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // evita que el comportamiento predeterminado del formulario se active
    document.querySelector('.card').classList.toggle('is-flipped');
  });