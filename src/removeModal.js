document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const element = document.querySelector('.modal--empty-title');
        if (element) {
          element.remove();
        }
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Disconnect the observer when it's no longer needed
  window.addEventListener('beforeunload', () => {
    observer.disconnect();
  });
});
