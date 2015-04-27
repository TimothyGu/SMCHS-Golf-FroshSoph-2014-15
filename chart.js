Chart.defaults.global.responsive = true
Chart.defaults.global.multiTooltipTemplate = '<%= value.toFixed(2) %>'
//Chart.defaults.global.maintainAspectRatio = false
Chart.defaults.Line.bezierCurveTension = 0.1
Chart.defaults.Line.legendTemplate = '<ul class="list-inline legend" id="legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'

function makeChart (id, datasets) {
  var e = document.getElementById(id)

  var ctx = e.getContext('2d');
  var chart = new Chart(ctx).Line({
    labels: courses
  , datasets: datasets
  })

  e.insertAdjacentHTML('afterend', chart.generateLegend())
  return chart
}
