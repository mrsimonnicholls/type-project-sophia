function setViewWidth() {
  // Create a CSS variable called --view-width and add it :root
  document.documentElement.style.setProperty('--view-width', `${window.innerWidth}px`);
}

// Set on load
setViewWidth();

// Update on resize
window.addEventListener('resize', setViewWidth);
