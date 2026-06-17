/* Our Learning Garden — interactions */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  /* ---- Waitlist form ---- */
  var form = document.getElementById("waitForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (el) {
        if (!el.value || (el.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value))) {
          ok = false;
          el.style.borderColor = "#C82E6F";
        } else {
          el.style.borderColor = "";
        }
      });
      if (!ok) return;

      var child = (document.getElementById("child").value || "your little one").trim();
      var program = document.getElementById("program").value || "";
      var msg = "We've saved a spot for " + child + " on the waitlist" +
        (program && program.indexOf("Not sure") === -1 ? " for " + program + "" : "") +
        ". We'll email you about tours and next steps within one business day.";
      document.getElementById("successMsg").textContent = msg;
      form.style.display = "none";
      document.getElementById("formSuccess").style.display = "block";
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(
    ".section-head, .program, .phil-card, .app-copy, .phone-stage, .event, .community-strip, .center-copy, .gallery, .waitlist-copy, .form-card, .logo-card"
  );
  revealEls.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .6s ease, transform .6s ease";
  });
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = "1";
          en.target.style.transform = "none";
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.style.opacity = "1"; el.style.transform = "none"; });
  }

  /* ---- Gentle parallax float on hero motifs ---- */
  var floats = document.querySelectorAll("#heroArt .float");
  if (floats.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var t = 0;
    (function tick() {
      t += 0.018;
      floats.forEach(function (f, i) {
        var base = f.getAttribute("data-baseT") || f.style.transform || "";
        if (!f.getAttribute("data-baseT")) f.setAttribute("data-baseT", base);
        var b = f.getAttribute("data-baseT");
        var dy = Math.sin(t + i * 1.3) * 5;
        f.style.transform = b + " translateY(" + dy.toFixed(2) + "px)";
      });
      requestAnimationFrame(tick);
    })();
  }
})();
