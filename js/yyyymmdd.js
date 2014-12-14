var ymd = (function() {
  var src = [
    {
      'product': 'date command',
      'year': {
        'yyyy': '%Y',
        'yy'  : '%y'
      },
      'month': {
        'mm'  : '%m'
      },
      'day': {
        'dd'  : '%d'
      },
      'dayOfWeek': {
        'numFrom0' : '%w',
        'numFrom1' : '%u'
      },
      'hour': {
        'hh24': '%H',
        'hh12': '%I'
      },
      'minute': {
        'mm': '%M'
      },
      'second': {
        'ss': '%S'
      }
    },
    {
      'product': 'Java SimpleDateFormat',
      'year': {
        'yyyy': 'yyyy',
        'yy'  : 'yy'
      },
      'month': {
        'mm'  : 'MM',
        'm'   : 'M'
      },
      'day': {
        'dd'  : 'dd',
        'd'   : 'd'
      },
      'dayOfWeek': {
        'locale' : 'E'
      },
      'hour': {
        'hh24': 'HH',
        'hh12': 'hh',
        'h24': 'H',
        'h12': 'h'
      },
      'minute': {
        'mm': 'mm',
        'm': 'm'
      },
      'second': {
        'ss': 'ss',
        's': 'ss'
      }
    }
  ];

  function YMD() {}

  YMD.defaultFormat = {
    'year'      : 'yyyy',
    'month'     : 'mm',
    'day'       : 'dd',
    'dayOfWeek' : 'numFrom0',
    'hour'      : 'hh24',
    'minute'    : 'mm',
    'second'    : 'ss'
  };

  YMD.patterns = function() {
    var patterns = {};
    _.forEach(src, function(oneSrc) {
      _.forEach(_.keys(oneSrc), function(oneSrcKey) {
        if (typeof(patterns[oneSrcKey]) === 'undefined') {
          patterns[oneSrcKey] = [];
        }
        _.forEach(_.keys(oneSrc[oneSrcKey]), function(pattern) {
          patterns[oneSrcKey].push(pattern);
        });
      });
    });
    var distinctedPatterns = {};
    _.forEach(_.keys(patterns), function(patternName) {
      distinctedPatterns[patternName] = _.unique(patterns[patternName]);
    });
    return distinctedPatterns;
  }

  YMD.get = function(keyword) {
    if (typeof(keyword) === 'undefined' || keyword === '') {
      return src;
    } else {
      return _.filter(src, function(s) { return s.product.toLowerCase().indexOf(keyword.toLowerCase()) > -1; });
    }
  };

  return YMD;
})();
