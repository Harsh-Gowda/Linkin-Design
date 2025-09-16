

// Mobile screen Menu 

  const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

// Toggle menu when clicking icon
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

// Close sidebar if clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnMenuBtn = menuBtn.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnMenuBtn && window.innerWidth < 768) {
    sidebar.classList.add("-translate-x-full");
  }
});

//  Animation text

  const roles = ["Web Developer", "Wordpress Developer", "Ecommerce Developer", "Front-end Developer",];
  let index = 0;
  const textElement = document.getElementById("changing-text");

  function changeText() {
    textElement.textContent = roles[index];
    index = (index + 1) % roles.length; // Loop back after last item
  }

  // Change every 2 seconds
  changeText(); // Initial text
  setInterval(changeText, 2000);
