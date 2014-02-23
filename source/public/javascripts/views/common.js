(function() {
  define(function(require, exports, module) {
    var $;
    $ = require('jquery');
    return module.exports = {
      removeWrapper: function(time, callback) {
        var $wp, arr, _i, _ref, _results;
        if (time == null) {
          time = 500;
        }
        if ($.isFunction(time)) {
          callback = time;
          time = 500;
        }
        $wp = $('.wrapper');
        arr = (function() {
          _results = [];
          for (var _i = 0, _ref = $wp.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
        if (arr.length <= 1) {
          return;
        }
        return setTimeout(function() {
          var key, _j, _len;
          for (_j = 0, _len = arr.length; _j < _len; _j++) {
            key = arr[_j];
            if (key < $wp.length - 1) {
              $wp.get(key).remove();
            }
          }
          if (callback) {
            return callback();
          }
        }, time);
      },
      resetContainer: function($container) {
        var h_header, h_subFooter, h_subHeader, reset_height;
        if ($container == null) {
          $container = $('.container-in');
        }
        console.log('$container', $container);
        h_header = $('.s-header').height();
        h_subHeader = $('.sub-header').height();
        h_subFooter = $('.sub-footer').height();
        reset_height = $(window).height() - (h_header + h_subHeader + h_subFooter);
        return $container.height(reset_height);
      }
    };
  });

}).call(this);