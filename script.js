
// Update footer year automatically
const footerText = document.querySelector("footer p");

if (footerText) {
  footerText.textContent =
    `© ${new Date().getFullYear()} Ajaz Ahmed · Freelance Accountant`;
}

// Smooth reveal animation when sections appear
const sections = document.querySelectorAll(
  ".intro, .services, .skills, .contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.12
});

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
