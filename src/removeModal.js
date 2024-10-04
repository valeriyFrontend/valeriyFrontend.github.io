function addObserverIfDesiredNodeAvailable() {
    const element = document.querySelector('.modal--empty-title');
    if(!element) {
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
    element.remove();
}

addObserverIfDesiredNodeAvailable();
