const callback = function (mutationsList, observer) {
  let elem = null;

  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      if (window.u1Autocomplete) {
        elem = mutation.target;
      }
    }
  }

  if (elem) {
    const isAutoComplete = validateSomething(elem, window.u1Autocomplete);
    if (isAutoComplete) {
      drawBorder(window.u1Autocomplete);
      window.u1Autocomplete = null;
    }
  }
};

module.exports = callback;
