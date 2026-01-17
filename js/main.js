document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;
  
    const whatsappMessage =
      `Hello Oasis Sunrise Medical Center,%0A%0A` +
      `I would like to book an appointment.%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Service: ${service}%0A` +
      `Preferred Date: ${date}%0A` +
      `Message: ${message}`;
  
    const whatsappURL =
      `https://wa.me/254724571389?text=${whatsappMessage}`;
  
    window.open(whatsappURL, "_blank");
  });
  