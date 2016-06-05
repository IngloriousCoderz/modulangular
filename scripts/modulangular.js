define(['angular'], function(angular) {
  angular.module('modulangular', [])

  angular.module('modulangular').controller('modulangularCtl', function() {
    this.message = 'Hello world!'
  })

  angular.module('modulangular').component('modulangularCmp', {
    template: '<h1>{{$ctrl.message}}</h1>',
    controller: function() {

    },
    bindings: {
      message: '='
    }
  })
})
