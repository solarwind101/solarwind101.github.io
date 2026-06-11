(function () {
  var sky = document.documentElement;
  var knob = document.getElementById('theme-toggle');
  if (localStorage.getItem('theme') === 'light') sky.classList.add('light');
  function reflect() {
    knob.textContent = sky.classList.contains('light') ? '[night]' : '[day]';
  }
  reflect();
  knob.addEventListener('click', function () {
    sky.classList.toggle('light');
    localStorage.setItem('theme', sky.classList.contains('light') ? 'light' : 'dark');
    reflect();
  });
})();
