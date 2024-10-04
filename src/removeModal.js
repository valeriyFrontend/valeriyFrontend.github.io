document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.modal--empty-title');
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        if (element) {
          element.remove();
        }
      }
    });
  });

  observer.observe(element, { childList: true, subtree: true });

  // Disconnect the observer when it's no longer needed
  window.addEventListener('beforeunload', () => {
    observer.disconnect();
  });
});
