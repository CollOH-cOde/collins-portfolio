/* =========================================================
   collins portfolio · scripts
   Terminal typing, theme toggle, mobile menu, reveal, nav
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Theme toggle (persisted) ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }

  var stored = null;
  try { stored = localStorage.getItem("colloh-theme"); } catch (e) { /* storage blocked */ }
  applyTheme(stored || "light");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("colloh-theme", next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      var isOpen = !mobileMenu.hidden;
      if (isOpen) {
        closeMenu();
      } else {
        mobileMenu.hidden = false;
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
    });
    mobileMenu.querySelectorAll("a[data-mobile-nav]").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Terminal typing ---------- */
  var terminalBody = document.getElementById("terminal-body");
  if (terminalBody && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var scriptLines = [
      { cls: "t-prompt", text: "$ whoami" },
      { text: "collins · full-stack developer · @CollOH-cOde" },
      { text: "" },
      { cls: "t-prompt", text: "$ cat stack.txt" },
      { text: "javascript  typescript  react" },
      { text: "node.js     express     mongodb" },
      { text: "" },
      { cls: "t-prompt", text: "$ npm run build-portfolio" },
      { text: "▸ building websites ............ done" },
      { text: "▸ building web apps ............ done" },
      { text: "▸ building rest apis ........... done" },
      { text: "" },
      { cls: "t-prompt", text: "$ status --now" },
      { text: "● available for work · let's build something" }
    ];
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function runTyping() {
      var i = 0;
      var current = null;
      var pos = 0;
      var cursor = document.createElement("span");
      cursor.className = "t-cursor";
      terminalBody.textContent = "";
      terminalBody.appendChild(cursor);

      function nextChar() {
        if (i >= scriptLines.length) return;
        var line = scriptLines[i];
        if (pos === 0) {
          current = document.createElement("div");
          current.textContent = line.cls ? "" : line.text;
          current.className = line.cls || "t-line";
          terminalBody.insertBefore(current, cursor);
        }
        var remaining = line.text.slice(pos, pos + 2);
        pos += remaining.length;
        if (current) current.textContent += remaining;
        if (pos >= line.text.length) {
          i++; pos = 0;
          setTimeout(nextChar, line.text === "" ? 80 : 260);
        } else {
          setTimeout(nextChar, 12 + Math.random() * 22);
        }
      }
      nextChar();
    }
    runTyping();
  } else if (terminalBody) {
    // Reduced motion: print instantly
    terminalBody.innerHTML = [
      "$ whoami",
      "collins · full-stack developer · @CollOH-cOde",
      "",
      "$ cat stack.txt",
      "javascript  typescript  react",
      "node.js     express     mongodb",
      "",
      "$ npm run build-portfolio",
      "▸ building websites ............ done",
      "▸ building web apps ............ done",
      "▸ building rest apis ........... done",
      "",
      "$ status --now",
      "● available for work · let's build something"
    ].join("\n");
  }

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll(
    ".card, .fact-card, .about-copy, .faq-item, .archive-list"
  );
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* ---------- Active nav highlighting ---------- */
  var navLinks = document.querySelectorAll(".main-nav a[data-nav]");
  var sections = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var sec = document.getElementById(id);
    if (sec) sections.push({ id: id, el: sec });
  });

  function setActive() {
    var scrollY = window.scrollY + 120;
    var activeId = null;
    sections.forEach(function (s) {
      if (s.el.offsetTop <= scrollY) activeId = s.id;
    });
    navLinks.forEach(function (link) {
      var isCurrent = activeId && link.getAttribute("href") === "#" + activeId;
      if (isCurrent) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
