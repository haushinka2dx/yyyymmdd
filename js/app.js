var app = (function() {
  function App() {}

  App.show = function(keyword, format) {
    var context = _.map(ymd.get(keyword), function(s) {
      var res = {};
      res['product'] = s.product;
      _.forEach(_.keys(format), function(k) {
        var v = s[k][format[k]];
        if (typeof(v) === 'undefined') {
          v = 'n/a';
        }
        res[k] = v;
      });
      //res['year'] = s['year'][format.year];
      return res;
    });

    var t = Hogan.compile($("#tmpl-result-row").text());
    $(".result-root").empty();
    _.forEach(context, function(c) {
      $(".result-root").append(t.render(c));
    });
  };

  return App;
})();

$(document).ready(function() {
  var keyEventHandler = function(e) {
    var keyword = e.keyCode == 46 || e.keyCode == 8 ? e.target.value : e.target.value + String.fromCharCode(e.keyCode);
    app.show(keyword, ymd.defaultFormat);
  };

  $("#product").on('keypress', keyEventHandler);
  $("#product").on('keyup', function(e) {
    if (e.keyCode == 46 || e.keyCode == 8){
      keyEventHandler(e);
    }
  });

  app.show('', ymd.defaultFormat);
});