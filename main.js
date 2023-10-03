// Get all skill-bar-value elements
const skillBars = document.querySelectorAll(".progress");

// Iterate through each skill-bar-value and set its width based on the data-percent attribute
skillBars.forEach(skillBar => {
    const percent = skillBar.getAttribute("data-percent");
    skillBar.style.width = percent;
});