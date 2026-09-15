// Copyright 2026 closeencoders.com. All Rights Reserved.
function handleNavigationState() {
  const path = window.location.pathname;
  let targetId = "home";
  if (path !== "/" && path !== "") {
    const match = path.match(/\/(about|projects|blog)/);
    targetId = match ? match[1] : null;
  }
  document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
  if (targetId) {
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.classList.add('active');
  }
}
function toggleMobileNav() {
  const navItems = document.getElementById("top-nav-items");
  const burgerBtn = document.querySelector(".mobile-nav-burger");
  if (!navItems) return;
  const isExpanded = navItems.classList.toggle("is-active");
  if (burgerBtn) {
    burgerBtn.setAttribute("aria-expanded", isExpanded);
  }
}
function setupEventListeners() {
  const burgerBtn = document.querySelector(".mobile-nav-burger");
  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => toggleMobileNav());
  }
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    window.onscroll = function () {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };
    backToTopButton.onclick = function () {
      var url = new URL(window.location.href);
      url.hash = '';
      window.history.replaceState({}, document.title, url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
}
setupEventListeners();
handleNavigationState();