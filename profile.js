// THEME TOGGLE — CONNECT (GLOBAL)

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.remove("dark", "light");
  body.classList.add(savedTheme);
}

// Toggle on click
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");

  body.classList.toggle("dark", !isDark);
  body.classList.toggle("light", isDark);

  localStorage.setItem("theme", isDark ? "light" : "dark");
});
  const tabButtons = document.querySelectorAll(".tab-item");
const tabSections = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    // Remove active class from all tabs
    tabButtons.forEach(b => b.classList.remove("active"));

    // Hide all sections
    tabSections.forEach(section => {
      section.style.display = "none";
      section.classList.remove("active");
    });

    // Activate clicked tab
    btn.classList.add("active");

    // Show matching section by ID
    const activeSection = document.getElementById(target);
    if (activeSection) {
      activeSection.style.display = "block";
      activeSection.classList.add("active");
    }
  });
});
