google.load("visualization", "1.0", {"packages":["corechart"]});

google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Topping");
  data.addColumn("number", "Slices");
  data.addRows([
    ["Onions", 3],
    ["Pepperoni", 8],
    ["Green Peppers", 4],
    ["Rocket", 6],
    ["Chicken", 2],
    ["Cheese", 2]
  ]);

  var options = {
    "title" : "How much of what, was on my pizza!",
    "width" : 800,
    "height": 600
  };

  var chart = new google.visualization.PieChart(document.getElementById("pie-chart"));
  chart.draw(data, options);
}
