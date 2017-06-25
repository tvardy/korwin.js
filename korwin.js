(function() {
  'use strict';
  
  var change = {
    what: 'float',
    from: 'left',
    to: 'right'
  };

  [].filter.call(getAllElements(), isLookedFor).forEach(applyChange);
  
  function getAllElements () {
    return document.body.getElementsByTagName('*');
  }
  
  function isLookedFor (el) {
    return getComputedStyle(el)[change.what] === change.from;
  }
  
  function applyChange (el) {
    el.style[change.what] = change.to;
  }
})();
