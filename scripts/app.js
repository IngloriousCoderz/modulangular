(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.myModule = factory(root.jQuery);
    }
}(this, function ($) {
    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    var message = 'Hello world!'
    $('#app').html('<h1>' + message + '</h1>')
    if (iNeedAnotherModule) {
      define(['anotherModule'], function(anotherModule) {
        
      })
    }
    return message
}));

// import $ from 'jquery'
// const message = 'Hello world!'
// export default message
