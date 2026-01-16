document.addEventListener("DOMContentLoaded", () => {
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
    // --- 2. SELECTION ENGINE ---
    // Function to handle selection within a specific group
    function handleGroupSelection(selector) {
        const items = document.querySelectorAll(selector);
        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
            });
        });
    }

    // Initialize Selection for the three independent groups
    handleGroupSelection('.category-filters .pill'); // All, Apps, Tools
    handleGroupSelection('.sort-filters .pill');     // Trending, Highest Selling
    handleGroupSelection('.polaroid');                // Product Cards
});