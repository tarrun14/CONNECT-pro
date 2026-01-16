const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme (optional but good)
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Save preference
  localStorage.setItem("theme", body.className);
});
// ===== CATEGORY DROPDOWN (SAFE NAMES) =====
const categoryToggleBtn = document.getElementById("categoryToggle");
const categoryMenuBox = document.getElementById("categoryMenu");
const categoryActiveText = document.getElementById("activeCategory");

if (categoryToggleBtn && categoryMenuBox) {
  categoryToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    categoryMenuBox.classList.toggle("show");
  });

  document.querySelectorAll(".category-option").forEach(option => {
    option.addEventListener("click", () => {
      categoryActiveText.textContent = option.textContent;
      categoryMenuBox.classList.remove("show");
    });
  });

  document.addEventListener("click", () => {
    categoryMenuBox.classList.remove("show");
  });
}
// Select all filter pills
const pills = document.querySelectorAll(".pill");

pills.forEach(pill => {
  pill.addEventListener("click", () => {

    // Remove active from all
    pills.forEach(p => p.classList.remove("active"));

    // Activate clicked pill
    pill.classList.add("active");

    // Get selected type
    const selectedType = pill.dataset.type;

    console.log("Selected filter:", selectedType);

    // 🔜 Later: filter discussion cards here
  });
});
