// Placeholder for future functionality, like scroll effects or form validation.
console.log("Greentwiste Exporters - Home Page");
// JavaScript for handling form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic form validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Optional: More complex email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission success
    alert(
      "Thank you for your message, " + name + "! We will get back to you soon."
    );

    // Reset the form
    contactForm.reset();
  });
});
