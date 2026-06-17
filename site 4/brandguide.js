/* Brand guide — reveal + marigold cover pattern */
(function () {
  "use strict";

  // Build a scattered marigold pattern in the cover background
  var pat = document.getElementById("coverPat");
  if (pat) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("viewBox", "0 0 1200 800");
    var spots = [
      [120,140,1.1],[360,90,0.7],[600,180,1.3],[860,110,0.8],[1080,200,1.05],
      [80,420,0.9],[300,500,1.2],[560,440,0.75],[780,540,1.1],[1010,470,0.85],
      [200,720,1.0],[480,700,0.8],[720,760,1.15],[960,720,0.7],[1140,640,1.0]
    ];
    spots.forEach(function (s) {
      var u = document.createElementNS(ns, "use");
      u.setAttribute("href", "#marigold");
      var sc = s[2] * 0.9;
      u.setAttribute("transform", "translate(" + s[0] + " " + s[1] + ") scale(" + sc + ") translate(-60 -60)");
      svg.appendChild(u);
    });
    pat.appendChild(svg);
  }

  // Reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  } else {
    els.forEach(function (e) { e.classList.add("in"); });
  }
})();
