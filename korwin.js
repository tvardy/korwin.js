(function() {
  'use strict';

  var change = {
    from: 'left',
    to: 'right'
  };

  [].filter.call(
    document.body.getElementsByTagName('*'),
    function (el) {
      return getComputedStyle(el).float === change.from;
    }
  ).forEach(function (el) {
    el.style.float = change.to;
  });
})();
