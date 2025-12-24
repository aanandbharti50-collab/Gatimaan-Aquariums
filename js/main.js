
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
})
document.querySelectorAll('.fade').forEach(el=>observer.observe(el))

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // If form is not on this page, do nothing
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const btn = document.getElementById("sendBtn");
    const hint = document.getElementById("formHint");

    if (!name || !email || !message) return;

    // Loading state
    btn.textContent = "Opening WhatsApp…";
    btn.disabled = true;
    btn.style.cursor = "wait";
    if (hint) hint.style.display = "block";

    const phone = "917004547105"; // your WhatsApp number
    const text =
      `Hello Gatimaan Aquariums,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Message: ${message}`;

    const url =
      "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

    // Open WhatsApp
    window.open(url, "_blank");

    // Optional: restore button after a moment
    setTimeout(() => {
      btn.textContent = "Send";
      btn.disabled = false;
      btn.style.cursor = "pointer";
    }, 1000);
  });
});

// ===============================
// TESTIMONIAL SLIDER
// ===============================

const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".testimonial-dots .dot");

if (slides.length && dots.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slides.forEach(s => s.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));

      slides[index].classList.add("active");
      dot.classList.add("active");
    });
  });
}
let currentIndex = 0;

const prevBtn = document.querySelector(".testimonial-arrow.prev");
const nextBtn = document.querySelector(".testimonial-arrow.next");

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentIndex = index;
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    const index = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  nextBtn.addEventListener("click", () => {
    const index = (currentIndex + 1) % slides.length;
    showSlide(index);
  });
}
