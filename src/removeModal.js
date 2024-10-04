const addObserverIfDesiredNodeAvailable = () => {
  const element = document.querySelector('.modal--empty-title');
  console.log(element)
  
  const observer = new MutationObserver((mutations) => {
    console.log(element, 1)
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        if (element) {
          element.remove();
        }
      }
    });
  });

  observer.observe(element);

  // Disconnect the observer when it's no longer needed
  window.addEventListener('beforeunload', () => {
    observer.disconnect();
  });
};

addObserverIfDesiredNodeAvailable();
