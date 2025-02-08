// Add an event listener to the reservation form
document.getElementById("reservation-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Retrieve the form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const table = document.getElementById("table").value;

  // Check if all form fields are filled out
  if (!name || !email || !phone || !date || !time || !guests || !table) {
      alert("Please fill out all fields.");
      return;
  }

  // Prepare the reservation confirmation message
  const confirmationMessage = `
      <strong>Name:</strong> ${name}<br>
      <strong>Phone:</strong> ${phone}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Date:</strong> ${date}<br>
      <strong>Reservation Time:</strong> ${time}<br>
      <strong>Number of People:</strong> ${guests}<br>
      <strong>Table:</strong> ${table}
  `;

  // Display the confirmation message
  document.getElementById("reservation-details").innerHTML = confirmationMessage;
  document.getElementById("confirmation-message").classList.remove("hidden");

  // Optionally, reset the form after submission
  document.getElementById("reservation-form").reset();
});
