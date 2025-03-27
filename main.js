document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user details
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;

    // Display user details
    document.getElementById("displayName").textContent = "Name: " + name;
    document.getElementById("displayGender").textContent = "Gender: " + gender;
    document.getElementById("displayAge").textContent = "Age: " + age;

    // Show user details section
    document.getElementById("userDetails").classList.remove("hidden");
});