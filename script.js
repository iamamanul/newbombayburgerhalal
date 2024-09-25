//sidebar open and close
function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
}




//scrolltoTop

// Get the scroll-to-top element
const scrollToTop = document.querySelector('.scroll-to-top');

// Add event listener to the scroll-to-top element
scrollToTop.addEventListener('click', () => {
  // Scroll to top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Add class to hide the arrow when scrolled to top
  scrollToTop.classList.add('scrolled-to-top');
});

// Add event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Check if the user has scrolled past a certain threshold (e.g. 200px)
  if (window.scrollY > 200) {
    // Remove class to show the arrow when scrolled past threshold
    scrollToTop.classList.remove('scrolled-to-top');
  } else {
    // Add class to hide the arrow when scrolled to top or below threshold
    scrollToTop.classList.add('scrolled-to-top');
  }
});

// Check if the page has been scrolled to the top when the page loads
if (window.scrollY === 0) {
  // Add class to hide the arrow when scrolled to top
  scrollToTop.classList.add('scrolled-to-top');
}




//leftswipe in mobile

// Add event listener to the document to close the sidebar on right swipe (for mobile devices)
document.addEventListener('touchstart', (event) => {
  // Get the touch event coordinates
  const touchX = event.touches[0].clientX;
  const touchY = event.touches[0].clientY;

  // Add event listener to the document to detect swipe gesture
  document.addEventListener('touchend', (event) => {
    // Get the touch event coordinates
    const endTouchX = event.changedTouches[0].clientX;
    const endTouchY = event.changedTouches[0].clientY;

    // Check if the swipe gesture is a right swipe
    if (endTouchX - touchX > 50 && Math.abs(endTouchY - touchY) < 100) {
      // Close the sidebar
      closeSidebar();
    }
  });
});



//navigation

const contactLink = document.querySelector('#contact');
const footer = document.querySelector('footer');

contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({ top: footer.offsetTop, behavior: "smooth" });
});

const shopLink = document.querySelector('#shop');
const section2 = document.querySelector('#section2');

shopLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: section2.offsetTop, behavior: 'smooth' });
});

const aboutLink = document.querySelector('#aboutnav');
const aboutBelow = document.querySelector('#aboutbelow');

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: aboutBelow.offsetTop, behavior: 'smooth' });
});




//sidebar

const sidebarLinks = document.querySelectorAll('#sidebar a');

sidebarLinks.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    let targetId = '';
    switch (link.id) {
      case 'shop':
        targetId = 'section2';
        break;
      case 'aboutnav':
        targetId = 'aboutbelow';
        break;
      case 'contact':
        targetId = 'footer';
        break;
      default:
        return;
    }
    const targetElement = document.querySelector(`#${targetId}`);
    window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
    // Close the sidebar after scrolling
    closeSidebar();
  });
});