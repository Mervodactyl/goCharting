google.load("visualization", "1", {packages:["corechart"]});

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
              title : "How much of what, was on my pizza!",
              width : 500,
             height : 400,
    backgroundColor : '#E3F4FA'
  };

  var chart = new google.visualization.PieChart(document.getElementById("pie-chart"));
  chart.draw(data, options);
}
