'use strict';

(function() {

class <%= classedName %>Controller {
  constructor() {
  }
}

angular.module('<%= scriptAppName %>')
  .controller('<%= classedName %>Controller', <%= classedName %>Controller);
})();
