google.load("visualization", "1", { packages : [ "corechart" ] });
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Per day"],
    ["Argue with Roi", 9],
    ["Sleep", 6],
    ["Netflix", 6],
    ["Eat", 3],
    ["Play with Pups", 4],
    ["Code", 9]
  ]);

  var options = {
              title : "Daily Routine",
              width : 500,
             height : 400,
              is3D  : true,
    backgroundColor : '#E3F4FA'
  }

  var chart = new google.visualization.PieChart(document.getElementById("pie-chart-3D"));
  chart.draw(data, options);
}
