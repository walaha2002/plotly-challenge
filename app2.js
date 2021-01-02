// Display the default plot

function init() {
    d3.json("samples.json").then((samples) => {
        getData(samples.names)
        var samples = samples.samples;
        var glblSamples = samples.filter(item => item.id === "940")[0].otu_ids;
        var sampleValues = samples.filter(item => item.id === "940")[0].sample_values;
        var myLabels = samples.filter(item => item.id === "940")[0].otu_labels;


        // Slice all variables needed for horizontal chart

        var slceGlblSamples = glblSamples.slice(0, 10).reverse();
        var slceSampleValues = sampleValues.slice(0, 10).reverse();
        var slceMyLabels = myLabels.slice(0, 10).reverse();

        //Create trace
        var trace1 = {
            x: slceSampleValues,
            y: slceGlblSamples.map(otu_id => `OTU ${otu_id}`),
            orientation: 'h',
            type: 'bar',
            text: slceMyLabels,
        };

        var data = [trace1];

        var layout = {
            title: "Belly Button Research"
        };

        Plotly.newPlot("plot", data, layout);

        var trace2 = {
            //x: slceGlblSamples.map(otu_id => `${otu_id}`),
            x: glblSamples.slice(0, 10).reverse(),
            y: sampleValues.slice(0, 10).reverse(),
            mode: 'markers',
            marker: {
                //color: ['rgb (glblSamples.slice(0,10).reverse())'],
                color: glblSamples.slice(0, 10).reverse(),
                colorscale: "Electric",
                size: sampleValues.slice(0, 10).reverse(),
            },
            text: myLabels
        };

        // Source: https://plotly.com/javascript/bubble-charts/
        // Source: https://code.tutsplus.com/tutorials/create-interactive-charts-using-plotlyjs-bubble-and-dot-charts--cms-29209

        var bubble = [trace2];

        var bbleLayout = {
            title: 'Bubble',
            showlegend: false,
            height: 600,
            width: 600
        };

        Plotly.newPlot('bubble', bubble, bbleLayout);

    });
}
init();

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

function getData(names) {

    //Assign dropdown to a variable
    var dropdownMenu = d3.select("#selDataset");
    //console.log(names)

    // Append values to dropdown
    names.forEach(name => {

        var selectedOption = dropdownMenu.append('option')
            .text(name)
            .attr("value", name);

        populatePanel(names);
        updatePlotly(selectedOption);
    })

    // populatePanel(names);
    // updatePlotly(selectedOption);
};

function populatePanel(sample) {
    //Get metadata

    d3.json("samples.json").then((metadata) => {
        // Use the map method to return specific values in the array
        var metadata = metadata.metadata;
        var panel1 = d3.select("#sample-metadata");
        panel1.html("");

        Object.entries(metadata[0]).forEach(([key, value]) => {
            panel1.append("h5").text(`${key}:${value}`);
        })
    });
}
// Update the restyled plot's values
function updatePlotly(selectedOption) {
    Plotly.restyle("plot", "values", [selectedOption]);
    Plotly.restyle("bubble", "values", [selectedOption]);
}