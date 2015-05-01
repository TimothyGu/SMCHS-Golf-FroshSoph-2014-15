var colors = require('./colors')
  , makeChart = require('./chart')
  , datasets = require('./data')
  , avg = require('./average')
  , table = require('./table')

colors.add(datasets)
var chart = makeChart('mainChart', datasets)
module.exports = chart
var state = 'main'

$('#navTab a:contains(Moving Average)').click(function (e) {
  if (state === 'avg') return
  var $this = $(this)
  $this.addClass('avg')
  state = 'avg'
  avg.avg(chart.datasets)
  chart.update()
})
$('#navTab a:contains(Over Par)').click(function (e) {
  if (state === 'main') return
  var $e = $(this)
  $e.removeClass('avg')
  state = 'main'
  avg.revert(chart.datasets)
  chart.update()
})

var blank = '#eee'

var $legend = $('#legend')
$legend.children().each(function (index) {
  var $this = $(this)
  $this.click(function () {
    if ($legend.hasClass('selected')) {
      toggleColor(index)
      chart.update()
      return
    }
    for (var i = 0; i < chart.datasets.length; i ++) {
      if (i === index) {
        chart.datasets[i].strokeColor = colors[i]
      } else {
        chart.datasets[i].strokeColor = blank
      }
    }
    $legend.addClass('selected')
    chart.update()
  })
  // $this.mouseenter(toggleColor.bind(null, index))
  // $this.mouseleave(toggleColor.bind(null, index))
})

function toggleColor (i) {
  var data = chart.datasets[i]
  if (data.strokeColor === blank) {
    data.strokeColor = colors[i]
  } else {
    data.strokeColor = blank
  }
}

$('#clear').click(function () {
  colors.add(chart.datasets)
  $legend.removeClass('selected')
  chart.update()
})

var table = window.table = $('#mainTable').html(table({
  courses: datasets.courses
, players: datasets
})).children().first().dataTable({
  scrollX  : true
/*
  searching: false
, paging   : false
*/
})
// new $.fn.dataTable.FixedColumns(table)
