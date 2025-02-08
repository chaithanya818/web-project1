document.addEventListener("DOMContentLoaded", function () {
    const showReservationButton = document.getElementById("show-reservation-form");
    const reservationFormContainer = document.getElementById("reservation-form-container");
    const reservationForm = document.getElementById("reservation-form");
    const confirmationMessage = document.getElementById("confirmation-message");
  
    // Show the reservation form when the "Reserve Table" button is clicked
    showReservationButton.addEventListener("click", function () {
      reservationFormContainer.classList.remove("hidden");
      showReservationButton.classList.add("hidden"); // Hide the "Reserve Table" button after clicking
    });
  
    // Handle form submission
    reservationForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the form values
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        partySize: document.getElementById("party-size").value,
        specialRequests: document.getElementById("special-requests").value,
      };
  
      // Send data to the back-end server (Node.js API)
      fetch("/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            confirmationMessage.style.display = "block";
            reservationForm.reset();
            reservationFormContainer.classList.add("hidden");
          } else {
            alert("There was an error with your reservation. Please try again.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("There was an error. Please try again later.");
        });
    });
  });
  