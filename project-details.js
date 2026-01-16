document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TAB SWITCHING LOGIC ---
    const tabs = document.querySelectorAll(".tab-link");
    const sections = document.querySelectorAll(".tab-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // 1. Remove 'active' from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            
            // 2. Hide all content sections
            sections.forEach(s => s.classList.remove("active"));

            // 3. Activate the clicked tab
            tab.classList.add("active");

            // 4. Show the corresponding section
            // We get the ID from data-tab="overview" -> id="overview"
            const targetId = tab.dataset.tab;
            const targetSection = document.getElementById(targetId);
            
            if(targetSection) {
                targetSection.classList.add("active");
            }
        });
    });

    // --- 2. THEME TOGGLE LOGIC ---
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    // Load saved theme from LocalStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    body.className = savedTheme;

    toggle.addEventListener("click", () => {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            body.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });

});
/* ===== PROJECT TABS ===== */
const tabs = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    // Active tab style
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Show / hide content
    contents.forEach(c => {
      c.hidden = c.dataset.content !== target;
    });
  });
});
