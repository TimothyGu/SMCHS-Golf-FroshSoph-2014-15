var Chart = require('chart.js')
  , raw = require('./data')

module.exports = function makeChart (id, datasets) {
  var e = document.getElementById(id)

  var ctx = e.getContext('2d');
  var chart = new Chart(ctx).Line({
    labels  : raw.courses
  , datasets: raw
  }, {
    responsive          : true
  , multiTooltipTemplate: '<%= value.toFixed(2) %>'
//, maintainAspectRatio : false
  , bezierCurveTension  : 0.1
  , legendTemplate      : '<ul class="list-inline legend" id="legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
  })

  e.insertAdjacentHTML('afterend', chart.generateLegend())
  return chart
}
