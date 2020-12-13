// Read in json data
// const data = d3.json("data/samples.json");
console.log(d3.json("/data/samples.json"));

d3.json("/data/samples.json").then((samples) => {

    //Create the Traces
    var trace1 = {
        x: samples.sample_values,
       // y: samples.otu_labels,
        type: 'horizontalBar',
        name: "Operational Taxonomic Units",
        label: samples.otu_labels
    };

    //Create the data array for the plot
    var data = [trace1];

    //Define the plot layout
    var layout = {
        title: "Operational Taxonomic Units",
        xaxis: {title: "something"},
        yaxis: {title: "something else"}
    };

    //Plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot",data,layout);
});
