const options = {
  attributes: true
}

function callback(mutationList, observer) {
  const element = document.querySelector('.modal--empty-title');
  
  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (element) {
          element.remove();
      }
    }
  })
}

function addObserverIfDesiredNodeAvailable() {
    const isPanelVisible = document.querySelector('.modal--empty-title');
    if(!isPanelVisible) {
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
    const observer = new MutationObserver(callback)
    observer.observe(isPanelVisible, options)
}

addObserverIfDesiredNodeAvailable();
