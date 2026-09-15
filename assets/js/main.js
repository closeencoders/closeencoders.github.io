//Copyright 2026 Close Encoders - closeencoders.com - All Rights Reserved
class PostManager {
  constructor() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.setupEventListeners();
    this.handleNavigationState();
  }

  getEl(id) {
    return document.getElementById(id);
  }

  setupEventListeners() {

    const burgerBtn = document.querySelector(".mobile-nav-burger");
    if (burgerBtn) {
      burgerBtn.addEventListener("click", () => this.toggleMobileNav());
    }

    const backToTopButton = document.getElementById("backToTop");
    // Show the button when the user scrolls down 200px
    if (backToTopButton) {
      window.onscroll = function () {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      };
      backToTopButton.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    }
  }

  handleNavigationState() {
    const path = window.location.pathname;
    let targetId = "home";
    if (path !== "/" && path !== "") {
      const match = path.match(/\/(about|projects|blog)/);
      targetId = match ? match[1] : null;
    }
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    if (targetId) {
      const targetEl = this.getEl(targetId);
      if (targetEl) targetEl.classList.add('active');
    }
  }

  toggleMobileNav() {
    const navItems = this.getEl("top-nav-items");
    const burgerBtn = document.querySelector(".mobile-nav-burger");

    if (!navItems) return;
    const isExpanded = navItems.classList.toggle("is-active");
    if (burgerBtn) {
      burgerBtn.setAttribute("aria-expanded", isExpanded);
    }
  }
}
const blogApp = new PostManager();
// Copyright 2026 Close Encoders - closeencoders.com - All Rights Reserved
