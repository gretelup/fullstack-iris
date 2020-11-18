d3.json("/sepal-length").then((data) => {

    // Parse response object into arrays of sepal length for each species
    var setosa = data["Iris-setosa"];
    var versicolor = data["Iris-versicolor"];
    var virginica = data["Iris-virginica"];

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

    var data = [trace1, trace2, trace3];
    
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