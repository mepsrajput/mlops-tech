const currentYear = new Date().getFullYear();
const backToTopButton = document.querySelector('#back-to-top');

// Insert the current year into the page
document.getElementById('year').innerHTML = currentYear;

// when the user scrolls, check if the button should be shown
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // when the user clicks the button, smooth scroll back to the top of the page
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
