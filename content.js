// Content script that runs on Gmail
console.log('Gmail Extension loaded');

// Example: Listen for new emails
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // Add your Gmail interaction code here
  });
});

// Start observing the Gmail interface
document.arrive('div[role="main"]', function() {
  observer.observe(this, {
    childList: true,
    subtree: true
  });
});