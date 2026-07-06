const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");
const navOverlay = document.querySelector("#navOverlay");
const breakpoint = window.matchMedia("(width < calc(600 / 16 * 1rem))")

setupTopNav();

btnOpen.addEventListener("click", () => mobileMenu(true));
btnClose.addEventListener("click", () => mobileMenu(false));
navOverlay.addEventListener("click", () => mobileMenu(false));
breakpoint.addEventListener("change", () => {
  // console.log("breakpoint crossed");
  setupTopNav();
});

function mobileMenu(value) {
  // console.log(value ? "openMobileMenu" : "closeMobileMenu");
  btnOpen.setAttribute("aria-expanded", value);
  menuTopNav.classList.add("animating");
  if (value == true) {
    main.setAttribute("inert", "");
    footer.setAttribute("inert", "");
    menuTopNav.removeAttribute("inert");
    bodyScrollLockUpgrade.disableBodyScroll(menuTopNav);
    btnClose.focus();
  }
  else {
    main.removeAttribute("inert");
    footer.removeAttribute("inert");
    menuTopNav.setAttribute("inert", "");
    bodyScrollLockUpgrade.enableBodyScroll(menuTopNav);
    btnOpen.focus();
  }
  setTimeout(() => {
    menuTopNav.classList.remove("animating");
  }, 300);
}

// btnOpen.addEventListener("click", openMobileMenu);
// function openMobileMenu() {
// console.log("openMobileMenu");
// }

// function closeMobileMenu() {
// console.log("closeMobileMenu");
// }

// console.log(breakpoint);

function setupTopNav() {
  if (breakpoint.matches) {
    // console.log("is mobile")
    menuTopNav.setAttribute("inert", "");
  }
  else {
    // console.log("is tablet/desktop")
    mobileMenu(false);
    menuTopNav.removeAttribute("inert");
  }
}