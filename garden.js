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

  /* ---- Center gallery slideshow ---- */
  var gallery = document.querySelector("[data-gallery]");
  if (gallery) {
    var slides = Array.prototype.slice.call(gallery.querySelectorAll(".g-slide"));
    var dotsWrap = gallery.querySelector(".g-dots");
    var idx = 0, timer = null;
    var DELAY = 5000;

    var dots = slides.map(function (s, i) {
      var d = document.createElement("button");
      d.className = "g-dot" + (i === 0 ? " is-active" : "");
      d.type = "button";
      d.setAttribute("role", "tab");
      d.setAttribute("aria-label", "Photo " + (i + 1));
      d.addEventListener("click", function () { go(i); reset(); });
      dotsWrap.appendChild(d);
      return d;
    });

    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle("is-active", i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle("is-active", i === idx); });
    }
    function next() { go(idx + 1); }
    function prev() { go(idx - 1); }
    function reset() {
      if (timer) clearInterval(timer);
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        timer = setInterval(next, DELAY);
      }
    }

    var nextBtn = gallery.querySelector(".g-next");
    var prevBtn = gallery.querySelector(".g-prev");
    if (nextBtn) nextBtn.addEventListener("click", function () { next(); reset(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); reset(); });
    gallery.addEventListener("mouseenter", function () { if (timer) clearInterval(timer); });
    gallery.addEventListener("mouseleave", reset);
    reset();
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
