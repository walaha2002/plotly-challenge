// Read in json data
// const data = d3.json("/data/samples.json");
// console.log(data);

//Reading from json
//Structure of json, identify fields
// create horizontal Bar Chart
//identify where in index.html to place the chart "element"
//Use Plotly to plot using the element in html
//Take 1 name and use it to filter the samples to get 1st object after filtering, then use the labels and the object to create the graph
//To get top 10, slice the first 10 (0,10) ids, and labels, and samples to feed the chart


d3.json("/data/samples.json").then((samples) => {
    var glblSamples;
    var names = samples.names;
    var samples = samples.samples;
    glblSamples = samples.filter(item => item.id === "940")[0].otu_ids;
    var sampleValues = samples.filter(item => item.id === "940")[0].sample_values;
    var myLabels = samples.filter(item => item.id === "940")[0].otu_labels;
    //var metadata = samples.metadata;
    //     var otu_ids = samples.names;
    //     var sample_values = samples.sample_values.sample_values;
    //     var otu_labels = samples.otu_labels.otu_labels;

    console.log(names);
    console.log(samples);
    console.log(glblSamples);
    console.log(sampleValues);
    console.log(myLabels);

    //Create trace
    var trace1 = {
        x: glblSamples,
        y: sampleValues,
        orientation: 'h',
        type: 'bar',
        text: myLabels
    };

    var data = [trace1];

    var layout = {
        title: "Belly Button Research"
    };

    Plotly.newPlot("plot", data, layout);

    var trace2 = {
        x: glblSamples,
        y: sampleValues,
        mode: 'markers',
        marker: sampleValues,
        text: myLabels
    };

    var bubble = [trace2];

    var bbleLayout = {
        title: 'Bubble',
        showlegend: false,
        height: 600,
        width: 600
    };

    Plotly.newPlot('bubble', bubble, bbleLayout);

});

    