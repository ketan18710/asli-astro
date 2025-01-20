// Select the form and its elements
const form = document.getElementById("contact-form");

// Validation function
function validateForm() {
  let isValid = true;

  // Remove previous error messages
  form.querySelectorAll(".error-message").forEach((msg) => msg.remove());
  form.querySelectorAll(".error-input").forEach((input) => {
    input.classList.remove("error-input");
  });

  // Validate each required field
  const requiredFields = form.querySelectorAll("input, textarea");
  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add("error-input");
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message", "text-red-500", "text-sm");
      errorMessage.textContent = `${capitalize(field.name)} is required.`;
      field.parentNode.appendChild(errorMessage);
    }

    // Additional email validation inside the loop
    if (field.id === "email" && field.value.trim()) {
      if (!isValidEmail(field.value.trim())) {
        isValid = false;
        field.classList.add(
          "error-input",
          "border-red-500",
          "focus:ring-red-500"
        );
        showError(field, "Please enter a valid email address.");
      }
    }
  });

  // Additional phone validation (outside the loop)
  const phoneField = form.querySelector("input[type='tel']");
  if (phoneField && !isValidPhoneNumber(phoneField.value)) {
    isValid = false;
    showError(phoneField, "Please enter a valid 10-digit phone number.");
  }

  return isValid;
}

// Utility functions
function showError(field, message) {
  field.classList.add("error-input");
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message", "text-red-500", "text-sm");
  errorMessage.textContent = message;
  field.parentNode.appendChild(errorMessage);
}

function isValidEmail(email) {
  // Proper email regex
  console.log(email);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhoneNumber(number) {
  const regex = /^\d{10}$/;
  return regex.test(number);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Form submission handler
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  if (!validateForm()) {
    console.log("Form validation failed.");
    return;
  }

  const formData = {
    name: form.querySelector("#name").value.trim(),
    email: form.querySelector("#email").value.trim(),
    number: form.querySelector("#phone").value.trim(),
    message: form.querySelector("#message").value.trim(),
  };

  console.log("Submitting form data:", formData);

  // Send data to the backend
  try {
    const response = await fetch("https://backend.asliastro.com/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is successful
    if (response.status === 201) {
      console.log("Data saved successfully!");
      failed_saved = true;
    } else {
      const errorData = await response.json();
      console.error("Error response from server:", errorData);
    }
  } catch (error) {
    console.error("Error submitting the form:", error.message);
    alert("Failed to submit the form. Please check your connection.");
  }
});
