// EmailJS CDN load হওয়ার পর init করতে হবে
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // এখানে তোমার Public Key বসাও
})();

// Form submit event
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",   // Service ID
    "YOUR_TEMPLATE_ID",  // Template ID
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      alert("Failed to send message!");
      console.log(error);
    }
  );
});