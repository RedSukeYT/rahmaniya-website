/* ==================================================
   RAHMANIYA BRANDING WEBSITE - SCRIPT.JS
   Simple • Clean • Easy to Edit
================================================== */

/* ---------- LOGO INTRO CONTROL ---------- */

// CHANGE THIS VALUE to control intro duration (milliseconds)
const introDuration = 3000; // 3000 = 3 seconds

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  // Hide intro after duration
  setTimeout(() => {
    intro.style.display = "none";
  }, introDuration);
});

/*
  👉 To DISABLE intro completely:
  Just comment the entire block above
*/

/* ---------- SMOOTH SCROLL FOR NAV LINKS ---------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* ---------- ADMISSION FORM ---------- */
const admissionForm = document.getElementById("admissions");

if (admissionForm) {
  admissionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your admission enquiry has been submitted.");
    admissionForm.reset();
  });
}

/* ---------- FEEDBACK FORM ---------- */
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your valuable feedback!");
    feedbackForm.reset();
  });
}

/* ---------- SIMPLE SCROLL ANIMATION ---------- */
const animatedItems = document.querySelectorAll(".section, .card, .item");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(40px)";
  item.style.transition = "all 0.8s ease";
  observer.observe(item);
});
