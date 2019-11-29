

$('body').scrollspy({ target: '#navbar-example' });

$('.carousel').carousel({
  interval: 3500,
  pause: false
});


function myFunction(x){
    x.classList.toggle('change')
}

// copyright
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

