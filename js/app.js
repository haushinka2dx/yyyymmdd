var app = (function() {
  function App() {}

  App.init = function() {
    for (var i=1; i<=3; i++) {
      $("#target").append('<option value="' + i + '">Option ' + i + '</option>')
    }

    var context = ymd.patterns();
    var t = Hogan.compile($("#tmpl-header-row").text());
    $(".ymd-header").append(t.render(context));

    $(".dropdown").dropdown({ 'transition': 'drop' });
  };

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
      return res;
    });

    var t = Hogan.compile($("#tmpl-result-row").text());
    $(".ymd-body").empty();
    _.forEach(context, function(c) {
      $(".ymd-body").append(t.render(c));
    });
  };

  App.changeFormat = function(format) {
  };

  return App;
})();

$(document).ready(function() {
  app.init();

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
