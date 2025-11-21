// main.js — small front-end enhancements
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you! Your message has been sent (demo).');
      form.reset();
    });
  }
});
