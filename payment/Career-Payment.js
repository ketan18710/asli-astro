document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    const arrow = button.querySelector(".fa-chevron-down");

    // Close all other accordions
    document.querySelectorAll(".accordion-content").forEach((content) => {
      if (content !== accordionContent) {
        content.style.maxHeight = null;
        content.classList.remove("active");
        content.previousElementSibling
          .querySelector(".fa-chevron-down")
          .classList.remove("rotate-180");
      }
    });

    // Toggle current accordion
    button.classList.toggle("active");
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      arrow.classList.remove("rotate-180");
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      arrow.classList.add("rotate-180");
    }
  });
});

const phoneNumber = document.getElementById("phoneNumber");
const whatsappNumber = document.getElementById("whatsappNumber");
const sameNumberCheckbox = document.getElementById("same-number");

sameNumberCheckbox.addEventListener("change", function () {
  if (this.checked) {
    whatsappNumber.value = phoneNumber.value;
    whatsappNumber.disabled = true;
  } else {
    whatsappNumber.disabled = false;
  }
});

phoneNumber.addEventListener("input", function () {
  if (sameNumberCheckbox.checked) {
    whatsappNumber.value = this.value;
  }
});

function initAutocomplete() {
  const input = document.getElementById("place-of-birth");
  const autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["(cities)"],
    fields: ["place_id", "geometry", "name"],
  });

  autocomplete.addListener("place_changed", function () {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }
    console.log("Selected place: ", place.name);
  });
}

google.maps.event.addDomListener(window, "load", initAutocomplete);

function validateForm() {
  const form = document.getElementById("childBirthForm");
  const requiredFields = form.querySelectorAll("[required]");
  let isValid = true;

  // Remove all existing error messages
  const existingErrorMessages = form.querySelectorAll(".error-message");
  existingErrorMessages.forEach((el) => el.remove());

  // Remove error styles from all inputs
  form
    .querySelectorAll(".error-input")
    .forEach((el) => el.classList.remove("error-input"));

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add("error-input");
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      const fieldName = field.name.replace(/([A-Z])/g, " $1").toLowerCase();
      errorMessage.textContent = `${
        fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
      } is required`;

      if (field.id === "phoneNumber" || field.id === "whatsappNumber") {
        const container = field.closest(".mt-4");
        container.appendChild(errorMessage);
      } else {
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
      }
    }
  });

  // Additional validations
  const phoneNumber = document.getElementById("phoneNumber");
  const whatsappNumber = document.getElementById("whatsappNumber");

  if (phoneNumber.value && !isValidPhoneNumber(phoneNumber.value)) {
    isValid = false;
    showError(phoneNumber, "Please enter a valid 10-digit phone number");
  }

  if (whatsappNumber.value && !isValidPhoneNumber(whatsappNumber.value)) {
    isValid = false;
    showError(whatsappNumber, "Please enter a valid 10-digit WhatsApp number");
  }

  return isValid;
}

function showError(input, message) {
  input.classList.add("error-input");
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  const container = input.closest(".mt-4");
  container.appendChild(errorMessage);
}

function isValidPhoneNumber(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}

const proceedToPaymentButton = document.getElementById(
  "proceedToPaymentButton"
);
proceedToPaymentButton.addEventListener("click", function (event) {
  event.preventDefault(); // Always prevent default to handle form submission manually
  if (validateForm()) {
    console.log("Form is valid. Proceeding to payment...");
    // Add your payment processing logic here
    initiateRazorpayPayment();
  }
});

function initiateRazorpayPayment() {
  // Replace with your actual Razorpay key
  const razorpayKey = window.ENV.RAZORPAY_KEY;

  // Create a new Razorpay instance
  const rzp = new Razorpay({
    key: razorpayKey,
    amount: 1000, // Amount in paise (e.g., 100 rupees = 10000 paise)
    currency: "INR",
    name: "KETAN",
    description: "Child Astrology",
    // image: "path/to/your/logo.png", // Optional
    handler: function (response) {
      // This function will be called when payment is successful
      console.log(
        "Payment successful. Payment ID: " + response.razorpay_payment_id
      );
      // You can add code here to update your server or show a success message
    },
    prefill: {
      name: "kee",
      email: "ketan22@kk.ll",
      contact: "999888800",
    },
    theme: {
      color: "#F37254",
    },
  });

  // Open the Razorpay payment dialog
  rzp.open();
}
