// var colors = Please.make_color({
//   colors_returned: datasets.length
// , full_random: true
// })
var colors = [ '#e6e4ad', '#41ff41', '#e6c344', '#ffcb97', '#93858c'
             , '#030402', '#c552ff', '#d2fcf6', '#234f98', '#47723a'
             , '#79271c'
             ]

function addColors (datasets) {
  for (var i = 0; i < datasets.length; i ++) {
    var base = colors[i]
    datasets[i].fillColor = 'rgba(0,0,0,0)'
    datasets[i].strokeColor = base
    datasets[i].pointColor = base
    datasets[i].pointStrokeColor = '#fff'
    datasets[i].pointHighlightFill = '#fff'
    datasets[i].pointHighlightStroke = base
  }
}
