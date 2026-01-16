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
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Save preference
  localStorage.setItem("theme", body.className);
});
if (!body.classList.contains("dark") && !body.classList.contains("light")) {
  body.classList.add("dark");
}
