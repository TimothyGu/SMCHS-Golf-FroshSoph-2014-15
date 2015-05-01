module.exports = function anonymous(locals, escape, include, rethrow
/**/) {
rethrow = rethrow || function rethrow(err, str, filename, lineno) {
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function (line, i) {
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escape = escape || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, function(m) {
          return _ENCODE_HTML_RULES[m] || m;
        });
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
;

var __line = 1
  , __lines = "<table class=\"table sortable-theme-bootstrap\" data-sortable>\n<% var short = {\n     'Tijeras Creek'      : 'TC'\n   , 'Casta del Sol'      : 'CdS'\n   , 'Los Serranos'       : 'LS'\n   , 'San Juan Hills'     : 'SJH'\n   , 'Meadowlark'         : 'M'\n   , 'Willowick'          : 'W'\n   , 'Tustin Ranch'       : 'TR'\n   , 'Links @ Summerly'   : 'L@S'\n   , 'Black Gold'         : 'BG'\n   , 'Arroyo Trabuco'     : 'AT'\n   , 'Los Amigos'         : 'LA'\n   , 'Little Rec'         : 'LR'\n   , 'David L. Baker'     : 'DB'\n   , 'Total # of matches' : 'Tot'\n   , 'Average'            : 'Avg'\n   , 'Match average'      : 'MAvg'\n   , 'Improvement'        : 'Imp'\n   } -%>\n<% function rank (arr) {\n     return arr.slice().map(function(v){ return sorted.indexOf(v)+1 })\n   } -%>\n<thead>\n  <tr>\n    <th>Player</th>\n    <% for (var i = 0; i < courses.length; i ++) { -%>\n      <th><%= short[courses[i]] %></th>\n    <% } -%>\n    <th>Tot</th>\n    <th>Avg</th>\n    <th>MAvg</th>\n    <th>Imp</th>\n  </tr>\n</thead>\n<tbody>\n  <% for (var i = 0; i < players.length; i ++) { -%>\n    <% var data = players[i] -%>\n    <% var tot = 0, sum, mSum = 0 -%>\n    <tr>\n      <th data-sortable=\"false\"\n          data-value=\"<%= data.label.split(' ').reverse().join(', ') %>\">\n        <%= data.label.split(' ')[1] %>\n      </th>\n      <td><%= data.data[0] %></td>\n      <% sum = data.data[0] -%>\n      <% for (var j = 1; j < courses.length; j ++) { -%>\n        <% if (data.data[j] == null) { -%>\n          <td data-value=\"9999999999\"></td>\n          <% continue -%>\n        <% } -%>\n        <td>\n          <%= data.data[j] %>\n          <% tot ++ -%>\n          <% sum += data.data[j] -%>\n          <% mSum += data.data[j] -%>\n        </td>\n      <% } -%>\n      <th data-sortable=\"false\"><%= tot %></th>\n      <th data-sortable=\"false\"><%= ( sum / (tot + 1)               ).toFixed(2) %></th>\n      <th data-sortable=\"false\"><%= (mSum /  tot                    ).toFixed(2) %></th>\n      <th data-sortable=\"false\"><%= (mSum /  tot      - data.data[0]).toFixed(2) %></th>\n    </tr>\n  <% } -%>\n</tbody>\n</table>\n<dl class=\"dl-horizontal\">\n  <dt>Shorthands</dt><dd></dd>\n  <% var keys = Object.keys(short) -%>\n  <% for (var i = 0; i < keys.length; i ++) { -%>\n    <dt><%= short[keys[i]] %></dt>\n    <dd><%= keys[i] %></dd>\n  <% } -%>\n</dl>\n"
  , __filename = undefined;
try {
  var __output = [];
  with (locals || {}) {
  __output.push('<table class="table sortable-theme-bootstrap" data-sortable>\n');
  __line = 2;
var short = {
     'Tijeras Creek'      : 'TC'
   , 'Casta del Sol'      : 'CdS'
   , 'Los Serranos'       : 'LS'
   , 'San Juan Hills'     : 'SJH'
   , 'Meadowlark'         : 'M'
   , 'Willowick'          : 'W'
   , 'Tustin Ranch'       : 'TR'
   , 'Links @ Summerly'   : 'L@S'
   , 'Black Gold'         : 'BG'
   , 'Arroyo Trabuco'     : 'AT'
   , 'Los Amigos'         : 'LA'
   , 'Little Rec'         : 'LR'
   , 'David L. Baker'     : 'DB'
   , 'Total # of matches' : 'Tot'
   , 'Average'            : 'Avg'
   , 'Match average'      : 'MAvg'
   , 'Improvement'        : 'Imp'
   }
; __output.push('');
  __line = 3;
function rank (arr) {
     return arr.slice().map(function(v){ return sorted.indexOf(v)+1 })
   }
; __output.push('<thead>\n  <tr>\n    <th>Player</th>\n    ');
  __line = 7;
for (var i = 0; i < courses.length; i ++) {
; __output.push('      <th>'
  , escape((__line = 8, short[courses[i]]))
  , '</th>\n    ');
  __line = 9;
}
; __output.push('    <th>Tot</th>\n    <th>Avg</th>\n    <th>MAvg</th>\n    <th>Imp</th>\n  </tr>\n</thead>\n<tbody>\n  ');
  __line = 17;
for (var i = 0; i < players.length; i ++) {
; __output.push('    ');
  __line = 18;
var data = players[i]
; __output.push('    ');
  __line = 19;
var tot = 0, sum, mSum = 0
; __output.push('    <tr>\n      <th data-sortable="false"\n          data-value="'
  , escape((__line = 22, data.label.split(' ').reverse().join(', ')))
  , '">\n        '
  , escape((__line = 23, data.label.split(' ')[1]))
  , '\n      </th>\n      <td>'
  , escape((__line = 25, data.data[0]))
  , '</td>\n      ');
  __line = 26;
sum = data.data[0]
; __output.push('      ');
  __line = 27;
for (var j = 1; j < courses.length; j ++) {
; __output.push('        ');
  __line = 28;
if (data.data[j] == null) {
; __output.push('          <td data-value="9999999999"></td>\n          ');
  __line = 30;
continue
; __output.push('        ');
  __line = 31;
}
; __output.push('        <td>\n          '
  , escape((__line = 33, data.data[j]))
  , '\n          ');
  __line = 34;
tot ++
; __output.push('          ');
  __line = 35;
sum += data.data[j]
; __output.push('          ');
  __line = 36;
mSum += data.data[j]
; __output.push('        </td>\n      ');
  __line = 38;
}
; __output.push('      <th data-sortable="false">'
  , escape((__line = 39, tot))
  , '</th>\n      <th data-sortable="false">'
  , escape((__line = 40, ( sum / (tot + 1)               ).toFixed(2)))
  , '</th>\n      <th data-sortable="false">'
  , escape((__line = 41, (mSum /  tot                    ).toFixed(2)))
  , '</th>\n      <th data-sortable="false">'
  , escape((__line = 42, (mSum /  tot      - data.data[0]).toFixed(2)))
  , '</th>\n    </tr>\n  ');
  __line = 44;
}
; __output.push('</tbody>\n</table>\n<dl class="dl-horizontal">\n  <dt>Shorthands</dt><dd></dd>\n  ');
  __line = 49;
var keys = Object.keys(short)
; __output.push('  ');
  __line = 50;
for (var i = 0; i < keys.length; i ++) {
; __output.push('    <dt>'
  , escape((__line = 51, short[keys[i]]))
  , '</dt>\n    <dd>'
  , escape((__line = 52, keys[i]))
  , '</dd>\n  ');
  __line = 53;
}
; __output.push('</dl>\n');
  }
  return __output.join('');
}
catch (err) {
  rethrow(err, __lines, __filename, __line);
}
}