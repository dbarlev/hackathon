const config = {
  childList: true,
  subtree: true,
};

const Observer = (validationCb) => {
  const callback = function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        validationCb(mutation.target);
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(document, config);

  runListeners();
};

const runListeners = () => {
  document.addEventListener('input', (e) => {
    if (e.target.nodeName === 'INPUT') {
      window.u1Autocomplete = { element: e.target, value: e.target.value };
    }
  });
};

module.exports = Observer;
