require.config({
  baseUrl: 'bower_components',

  paths: {
    angular: 'angular/angular.min',
    jquery: 'jquery/dist/jquery.min',
    modulangular: '../scripts'
  },

  shim: {
    angular: {
      exports: 'angular'
    }
  },

  deps: ['modulangular/modulangular']
})
