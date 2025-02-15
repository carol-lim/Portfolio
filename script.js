// Function to update the current year in the footer
function updateCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
}

// Load Navigation and Footer
function loadComponents() {
  // Load Navigation
  fetch("components/nav.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("nav").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading navigation:", error);
    });

  // Load Footer
  fetch("components/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
      // Update the current year after loading the footer
      updateCurrentYear();
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadComponents);
