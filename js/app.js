var app = (function() {
  function App() {}

  App.init = function() {
    this.headers = ['year', 'month', 'day', 'dayOfWeek', 'hour', 'minute', 'second'];
    this.patterns = ymd.patterns();
    var t = Hogan.compile($("#tmpl-header-row").text());
    $(".ymd-header").append(t.render(this.patterns));

    function handleDropDownChanged(value, text) {
      var keyword = $('#product').text();
      this.show(keyword, this.createFormat());
    }

    var dropdownOnChangeHandler = handleDropDownChanged.bind(this);

    $(".dropdown").dropdown({
      transition: 'drop',
      onChange: dropdownOnChangeHandler
    });
  };

  App.createFormat = function() {
    var _app = this;
    var format = {};
    _.forEach(this.headers, function(column) {
      var formatValue = $('.ymd-' + column + ' .item.selected').text();
      if (formatValue == '') {
        formatValue = _app.patterns[column][0];
      }
      format[column] = formatValue;
    });
    return format;
  }

  App.show = function(keyword, format) {
    this.lastData = ymd.get(keyword);
    var context = _.map(this.lastData, function(s) {
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

  return App;
})();

$(document).ready(function() {
  app.init();

  var keyEventHandler = function(e) {
    var keyword = e.keyCode == 46 || e.keyCode == 8 ? e.target.value : e.target.value + String.fromCharCode(e.keyCode);
    app.show(keyword, app.createFormat());
  };

  $("#product").on('keypress', keyEventHandler);
  $("#product").on('keyup', function(e) {
    if (e.keyCode == 46 || e.keyCode == 8){
      keyEventHandler(e);
    }
  });

  app.show('', app.createFormat());
});
