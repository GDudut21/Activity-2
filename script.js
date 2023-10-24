// Get all the "Show Skill" elements
const toggleSkillElements = document.querySelectorAll(".toggle-skill");

// Add click event listeners to each "Show Skill" element
toggleSkillElements.forEach((toggleSkill) => {
    toggleSkill.addEventListener("click", () => {
        // Find the associated skill description
        const skillDescription = toggleSkill.nextElementSibling;

        // Toggle the display of the skill description
        if (skillDescription.style.display === "block") {
            skillDescription.style.display = "none";
        } else {
            skillDescription.style.display = "block";
        }
    });
});
