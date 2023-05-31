// To Top
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Local Storage Dark Mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Animation Loading
onload = function () {
  let loading = document.getElementById('loader');

  setTimeout(() => {
    loading.style.display = 'none';
  }, 3000);
};

// Contact Form
// Emailjs
const btnLoading = document.querySelector('.btn-loading');
const btnKirim = document.querySelector('.btn-kirim');
const myAlert = document.querySelector('.my-alert');
const serviceID = 'service_oscztgm';
const templateID = 'template_fwcbu37';

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  // When the Submit Button is Clicked
  // Show Loading Button, Remove Send Button
  btnLoading.classList.toggle('hidden');
  btnKirim.classList.toggle('hidden');

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      // Show Submit Button, Remove loading Button
      btnLoading.classList.toggle('hidden');
      btnKirim.classList.toggle('hidden');
      // Show Alert
      myAlert.classList.toggle('hidden');
      // Remove Alert
      setTimeout(() => {
        myAlert.style.display = 'none';
      }, 3000);
      console.log('SUCCESS!', response.status, response.text);
      // Reset form
      document.getElementById('contact-form').reset();
    },
    (error) => {
      console.log('FAILED...', error);
    }
  );
});
