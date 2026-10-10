
const WHATSAPP = "919398224829";

function bookWhatsApp(message = "Hello! I would like to book a photography session.") {
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Select an occasion and start WhatsApp enquiry
function chooseService(service) {
  document.getElementById("occasion").value = service;
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function choosePackage(packageName) {
  bookWhatsApp(`Hello! I am interested in your ${packageName} photography package. Please share the details and pricing.`);
}

// Prevent past event dates
const eventDate = document.getElementById("eventDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

eventDate.min = localToday;

// Booking form -> WhatsApp
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const occasion = document.getElementById("occasion").value;
  const date = eventDate.value || "Not decided yet";
  const details = document.getElementById("details").value.trim() || "None";

  const message =
    `Hello LensCraft Photography Studio! 📸\n\n` +
    `I would like to enquire about a booking.\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Occasion: ${occasion}\n` +
    `Event Date: ${date}\n` +
    `Details: ${details}\n\n` +
    `Please share availability and pricing. Thank you!`;

  bookWhatsApp(message);
});

document.getElementById("year").textContent = new Date().getFullYear();

