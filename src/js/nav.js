const navLinks = document.querySelectorAll('[data-navLink]');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
    console.log(link);
  });

  // if(link.getAttribute('href') === window.location.pathname) {
  //   link.classList.add('active');
  // }

  // if ((link.getAttribute('href') === window.location.pathname) === '/about') {
  //   window.body.classList.add('bg-color');
  // }
});


const navbar = document.querySelector('.nav');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    console.log('entries', entries);
    navbar.classList.toggle('sticking', !entries[0].isIntersecting);
  },
  { rootMargin: '50px 0px 0px 0px' }
);

navObserver.observe(scrollWatcher);