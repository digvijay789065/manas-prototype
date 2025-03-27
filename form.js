// Get elements
const modal = document.getElementById("formModal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("userForm");

// Close modal when "X" is clicked
closeBtn.addEventListener("click", () => {
    window.history.back(); // Goes back to the main page
});

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;

    // Validate inputs
    if (name.trim() === "" || gender === "" || age.trim() === "") {
        alert("Please fill out all fields!");
        return;
    }

    // Show confirmation (or send data to backend)
    alert(`Thank you, ${name}! Your details are submitted.`);

    // Redirect back to homepage
    window.history.back();
});
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture form values
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;

    // Create query string
    const params = new URLSearchParams({ name, gender, age });

    // Redirect to main.html with parameters
    window.location.href = `main.html?${params.toString()}`;
});