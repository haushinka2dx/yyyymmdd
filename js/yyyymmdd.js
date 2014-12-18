var ymd = (function() {
  var src = [
    {
      'product': 'date command(linux)',
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
        'num from 0' : '%w',
        'num from 1' : '%u'
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
    }
    ,{
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
        'full textual' : 'EEEEEEEEE',
        'short textual' : 'E'
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
        's': 's'
      }
    }
    ,{
      'product': 'PHP',
      'year': {
        'yyyy': 'Y',
        'yy'  : 'y'
      },
      'month': {
        'mm'  : 'm',
        'm'   : 'n',
        'full textual' : 'F',
        'short textual' : 'M'
      },
      'day': {
        'dd'  : 'd',
        'd'   : 'j'
      },
      'dayOfWeek': {
        'full textual' : 'l',
        'short textual' : 'D',
        'num from 0' : 'w',
        'num from 1' : 'N'
      },
      'hour': {
        'hh24': 'H',
        'hh12': 'h',
        'h24': 'G',
        'h12': 'g'
      },
      'minute': {
        'mm': 'i'
      },
      'second': {
        'ss': 's'
      }
    }
    ,{
      'product': 'Python strftime strptime',
      'year': {
        'yyyy': '%Y',
        'yy'  : '%y'
      },
      'month': {
        'mm'  : '%m',
        'full textual' : '%B',
        'short textual' : '%b'
      },
      'day': {
        'dd'  : '%d',
        'd'   : '%e'
      },
      'dayOfWeek': {
        'full textual' : '%A',
        'short textual' : '%a',
        'num from 0' : '%w',
        'num from 1' : '%u'
      },
      'hour': {
        'hh24': '%H',
        'hh12': '%I',
        'h24': '%k',
        'h12': '%l'
      },
      'minute': {
        'mm': '%M'
      },
      'second': {
        'ss': '%S'
      }
    }
    ,{
      'product': 'Ruby Date::strftime',
      'year': {
        'yyyy': '%Y',
        'yy'  : '%y'
      },
      'month': {
        'mm'  : '%m',
        'full textual' : '%B',
        'short textual' : '%b'
      },
      'day': {
        'dd'  : '%d',
        'd'   : '%e'
      },
      'dayOfWeek': {
        'full textual' : '%A',
        'short textual' : '%a',
        'num from 0' : '%w',
        'num from 1' : '%u'
      },
      'hour': {
        'hh24': '%H',
        'hh12': '%I',
        'h24': '%k',
        'h12': '%l'
      },
      'minute': {
        'mm': '%M'
      },
      'second': {
        'ss': '%S'
      }
    }
    ,{
      'product': 'Perl strftime',
      'year': {
        'yyyy': '%Y',
        'yy'  : '%y'
      },
      'month': {
        'mm'  : '%m',
        'full textual' : '%B',
        'short textual' : '%b'
      },
      'day': {
        'dd'  : '%d',
        'd'   : '%e',
      },
      'dayOfWeek': {
        'full textual' : '%A',
        'short textual' : '%a',
        'num from 0' : '%w',
        'num from 1' : '%u'
      },
      'hour': {
        'hh24': '%H',
        'hh12': '%I',
        'h24': '%k',
        'h12': '%l'
      },
      'minute': {
        'mm': '%M'
      },
      'second': {
        'ss': '%S'
      }
    }
    ,{
      'product': 'C strftime',
      'year': {
        'yyyy': '%Y',
        'yy'  : '%y'
      },
      'month': {
        'mm'  : '%m',
        'full textual' : '%B',
        'short textual' : '%b'
      },
      'day': {
        'dd'  : '%d',
        'd'   : '%e'
      },
      'dayOfWeek': {
        'full textual' : '%A',
        'short textual' : '%a',
        'num from 0' : '%w',
        'num from 1' : '%u'
      },
      'hour': {
        'hh24': '%H',
        'hh12': '%I',
        'h24': '%k',
        'h12': '%l'
      },
      'minute': {
        'mm': '%M'
      },
      'second': {
        'ss': '%S'
      }
    }
    ,{
      'product': 'C# DateTime#ToString',
      'year': {
        'yyyy': 'yyyy',
        'yy'  : 'yy',
        'y'  : 'y'
      },
      'month': {
        'mm'  : 'MM',
        'm'  : 'M',
        'full textual' : 'MMMM',
        'short textual' : 'MMM'
      },
      'day': {
        'dd'  : 'dd',
        'd'   : 'd'
      },
      'dayOfWeek': {
        'full textual' : 'dddd',
        'short textual' : 'ddd'
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
        's': 's'
      }
    }
    ,{
      'product': 'Scala StringLike format',
      'year': {
        'yyyy': '%tY',
        'yy'  : '%ty'
      },
      'month': {
        'mm'  : '%tm',
        'full textual' : '%tB',
        'short textual' : '%tb'
      },
      'day': {
        'dd'  : '%td',
        'd'   : '%te'
      },
      'dayOfWeek': {
        'full textual' : '%tA',
        'short textual' : '%ta',
        'num from 0' : '%tw',
        'num from 1' : '%tu'
      },
      'hour': {
        'hh24': '%tH',
        'hh12': '%tI',
        'h24': '%tk',
        'h12': '%tl'
      },
      'minute': {
        'mm': '%tM'
      },
      'second': {
        'ss': '%tS'
      }
    }
    ,{
      'product': 'Haskell',
      'year': {
        'yyyy': '%Y',
        'yy'  : '%y'
      },
      'month': {
        'mm'  : '%m',
        'full textual' : '%B',
        'short textual' : '%b'
      },
      'day': {
        'dd'  : '%d',
        'd'   : '%e'
      },
      'dayOfWeek': {
        'full textual' : '%A',
        'short textual' : '%a',
        'num from 0' : '%w',
        'num from 1' : '%u'
      },
      'hour': {
        'hh24': '%H',
        'hh12': '%I',
        'h24': '%k',
        'h12': '%l'
      },
      'minute': {
        'mm': '%M'
      },
      'second': {
        'ss': '%S'
      }
    }
    ,{
      'product': 'MySQL DATE_FORMAT',
      'year': {
        'yyyy': '%Y',
        'yy'  : '%y'
      },
      'month': {
        'mm'  : '%m',
        'full textual' : '%B',
        'short textual' : '%b'
      },
      'day': {
        'dd'  : '%d',
        'd'   : '%e'
      },
      'dayOfWeek': {
        'full textual' : '%A',
        'short textual' : '%a',
        'num from 0' : '%w',
        'num from 1' : '%u'
      },
      'hour': {
        'hh24': '%H',
        'hh12': '%I',
        'h24': '%k',
        'h12': '%l'
      },
      'minute': {
        'mm': '%M'
      },
      'second': {
        'ss': '%S'
      }
    }
    ,{
      'product': 'PostgreSQL to_char',
      'year': {
        'yyyy': 'YYYY',
        'yyy' : 'YYY',
        'yy'  : 'YY',
        'y'   : 'Y'
      },
      'month': {
        'mm'  : 'MM',
        'full textual' : 'Month',
        'short textual' : 'Mon'
      },
      'day': {
        'dd'  : 'DD'
      },
      'dayOfWeek': {
        'full textual' : 'Day',
        'short textual' : 'Dy',
        'num from 1' : 'D'
      },
      'hour': {
        'hh24': 'HH24',
        'hh12': 'HH'
      },
      'minute': {
        'mm': 'MI'
      },
      'second': {
        'ss': 'SS'
      }
    }
    ,{
      'product': 'SQL Server FORMAT',
      'year': {
        'yyyy': 'yyyy',
        'yy'  : 'yy',
        'y'  : 'y'
      },
      'month': {
        'mm'  : 'MM',
        'm'  : 'M',
        'full textual' : 'MMMM',
        'short textual' : 'MMM'
      },
      'day': {
        'dd'  : 'dd',
        'd'   : 'd'
      },
      'dayOfWeek': {
        'full textual' : 'dddd',
        'short textual' : 'ddd'
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
        's': 's'
      }
    }
    ,{
      'product': 'Oracle to_char',
      'year': {
        'yyyy': 'YYYY',
        'yyy' : 'YYY',
        'yy'  : 'YY',
        'y'   : 'Y'
      },
      'month': {
        'mm'  : 'MM',
        'full textual' : 'MONTH',
        'short textual' : 'MON'
      },
      'day': {
        'dd'  : 'DD'
      },
      'dayOfWeek': {
        'full textual' : 'DAY',
        'short textual' : 'DY',
        'num from 1' : 'D'
      },
      'hour': {
        'hh24': 'HH24',
        'hh12': 'HH'
      },
      'minute': {
        'mm': 'MI'
      },
      'second': {
        'ss': 'SS'
      }
    }
    ,{
      'product': 'Excel',
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
        'full textual' : 'dddd',
        'short textual' : 'ddd',
        'full textual(jp)' : 'aaaa',
        'short textual(jp)' : 'aaa'
      },
      'hour': {
        'hh24': 'hh',
        'h24': 'h'
      },
      'minute': {
        'mm': 'mm',
        'm': 'm'
      },
      'second': {
        'ss': 'ss',
        's': 's'
      }
    }
    ,{
      'product': 'JavaScript',
      'year': {},
      'month': {},
      'day': {},
      'dayOfWeek': {},
      'hour': {},
      'minute': {},
      'second': {}
    }
  ];

  function YMD() {}

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
    var sorted = _.sortBy(src, 'product');
    if (typeof(keyword) === 'undefined' || keyword === '') {
      return sorted;
    } else {
      return _.filter(sorted, function(s) { return s.product.toLowerCase().indexOf(keyword.toLowerCase()) > -1; });
    }
  };

  return YMD;
})();
