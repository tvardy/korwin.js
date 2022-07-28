// version 2017
(function(root) {
  'use strict';
  
  var change = {
    what: 'float',
    from: 'left',
    to: 'right'
  };

  [].filter.call(getAllElements(), isLookedFor).forEach(applyChange);
  
  function getAllElements () {
    return root.getElementsByTagName('*');
  }
  
  function isLookedFor (el) {
    return getComputedStyle(el)[change.what] === change.from;
  }
  
  function applyChange (el) {
    el.style[change.what] = change.to;
  }
})(document.body);

// version 2022
((root) => {
  const change = {
    what: 'float',
    from: 'left',
    to: 'right'
  }

  const API = {
    getAllElements: () => root.getElementsByTagName('*'),
    isLookedFor: el => getComputedStyle(el)[change.what] === change.from,
    applyChange: el => el.style[change.what] = change.to
  }

  API.getAllElements().filter(API.isLookedFor).forEach(applyChange)
})(document.body)
