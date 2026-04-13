// Ensure the DOM is fully loaded before running our script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Select elements using the strict data-testid attributes
    const card = document.querySelector('[data-testid="test-todo-card"]');
    const toggleCheckbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
    const statusText = document.querySelector('[data-testid="test-todo-status"]');
    const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
    const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
    const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

    // 2. Checkbox Toggle Behavior
    toggleCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
            // Visually update the card and change status to Done
            card.classList.add("completed");
            statusText.textContent = "Done";
        } else {
            // Revert back to Pending if unchecked
            card.classList.remove("completed");
            statusText.textContent = "Pending";
        }
    });

    // 3. Time Remaining Calculation
    const calculateTimeRemaining = () => {
        // Our hardcoded deadline from the HTML
        const dueDate = new Date("2026-04-16T23:59:00Z").getTime();
        const now = new Date().getTime();
        const difference = dueDate - now;

        if (difference < 0) {
            timeRemainingEl.textContent = "Overdue";
            timeRemainingEl.style.color = "var(--high-priority)";
            return;
        }

        // Convert ms difference into days
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        if (days > 0) {
            timeRemainingEl.textContent = `Due in ${days} day${days > 1 ? 's' : ''}`;
        } else {
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeRemainingEl.textContent = `Due in ${hours} hours`;
        }
    };

    // Run the calculation immediately on load
    calculateTimeRemaining();

    // 4. Dummy Actions for Buttons (Instructor approved)
    editBtn.addEventListener("click", () => {
        console.log("Edit clicked");
        alert("Edit functionality triggered! (Dummy action)");
    });

    deleteBtn.addEventListener("click", () => {
        console.log("Delete clicked");
        // We'll show an alert and visually hide the card to simulate deletion
        alert("Task deleted! (Dummy action)");
        card.style.display = "none"; 
    });
});