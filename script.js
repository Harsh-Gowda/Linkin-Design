document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenuWrapper = document.getElementById('mobile-menu-wrapper');
  const overlay = document.getElementById('overlay');

  menuButton.addEventListener('click', () => {
    mobileMenuWrapper.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0');
  });

  // This is the new event listener
  closeMenuButton.addEventListener('click', () => {
    mobileMenuWrapper.classList.add('translate-x-full');
    overlay.classList.add('opacity-0');
  });

  // You can also close the menu by clicking the overlay
  overlay.addEventListener('click', () => {
    mobileMenuWrapper.classList.add('translate-x-full');
    overlay.classList.add('opacity-0');
  });
});


////  Animation text

  const roles = ["Web Developer", "Designer", "Creator"];
  let index = 0;
  const textElement = document.getElementById("changing-text");

  function changeText() {
    textElement.textContent = roles[index];
    index = (index + 1) % roles.length; // Loop back after last item
  }

  // Change every 2 seconds
  changeText(); // Initial text
  setInterval(changeText, 2000);
