function optionChanged(selection) {
  // If all is selected, render original histogram
  if (selection === "all") {
    init();
  } else {
    d3.json(`/sepal-length/${selection}`).then((response) => {
      switch (selection) {
        // Set trace to data for selected iris
        case "Iris-setosa":
          var trace = {
            x: response,
            type: "histogram",
            opacity: 0.7,
            marker: {
              color: '#ffa6c1',
            },
            name: "Iris-setosa"
          };
          break;
        case "Iris-versicolor":
          var trace = {
            x: response,
            type: "histogram",
            opacity: 0.6,
            marker: {
              color: '#92daff',
            },
            name: "Iris-versicolor"
          };
          break;
        case "Iris-virginica":
          var trace = {
            x: response,
            type: "histogram",
            opacity: 0.5,
            marker: {
              color: '#46c45a',
            },
            name: "Iris-virginica"
          };
          break;
      }

      var data = [trace];

      var layout = {
        bargap: 0.01,
        bargroupgap: 0.01,
        barmode: "overlay",
        title: "Sepal Length",
        xaxis: {
          title: "Length in cm"
        },
        yaxis: {
          title: "Count"
        }
      };

      var config = {
        responsive: true
      }

      Plotly.newPlot('hist', data, layout, config);
    });
  }
}

function init() {
  d3.json("/sepal-length").then((response) => {

    // Parse response object into arrays for each species
    var setosa = response["Iris-setosa"];
    var versicolor = response["Iris-versicolor"];
    var virginica = response["Iris-virginica"];

    // Create trace for each species
    var trace1 = {
      x: setosa,
      type: "histogram",
      opacity: 0.7,
      marker: {
        color: '#ffa6c1',
      },
      name: "Iris-setosa"
    };

    var trace2 = {
      x: versicolor,
      type: "histogram",
      opacity: 0.6,
      marker: {
        color: '#92daff',
      },
      name: "Iris-versicolor"
    };

    var trace3 = {
      x: virginica,
      type: "histogram",
      opacity: 0.5,
      marker: {
        color: '#46c45a',
      },
      name: "Iris-virginica"
    };
    // Create data for plot
    var data = [trace1, trace2, trace3];

    // Specify some formatting options 
    var layout = {
      bargap: 0.01,
      bargroupgap: 0.01,
      barmode: "overlay",
      title: "Sepal Length",
      xaxis: {
        title: "Length in cm"
      },
      yaxis: {
        title: "Count"
      }
    };

    // Set chart to be responsive 
    var config = {
      responsive: true
    }
    Plotly.newPlot('hist', data, layout, config);
  });
}

init();