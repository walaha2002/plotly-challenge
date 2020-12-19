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
var metadata;

d3.json("/data/samples.json").then((samples) => {
    var glblSamples;
    var names = samples.names;
    var samples = samples.samples;
    glblSamples = samples.filter(item => item.id === "940")[0].otu_ids;
    var sampleValues = samples.filter(item => item.id === "940")[0].sample_values;
    var myLabels = samples.filter(item => item.id === "940")[0].otu_labels;


    // console.log(names);
    // console.log(samples);
    // console.log(glblSamples);
    // console.log(sampleValues);
    // console.log(myLabels);


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

//Get metadata
d3.json("/data/samples.json").then((metadata) => {
    // Use the map method to return specific values in the array
    var metadata = metadata.metadata;
    var age = metadata.map(a => a.age);
    var ethnicity = metadata.map(a => a.ethnicity);
    var location = metadata.map(a => a.location);
    var wfreq = metadata.map(a => a.wfreq);
    var bbtype = metadata.map(a => a.bbtype);
    var gender = metadata.map(a => a.gender);
    var ID = metadata.map(a => a.id);

    console.log("Metadata*********");
    console.log(metadata);
    console.log("Age*********");
    console.log(age);
    console.log("Gender*********");
    console.log(gender);
    console.log("Ethnicity*********");
    console.log(ethnicity);
    console.log("bbtype*********");
    console.log(bbtype);
    console.log("Wash Frequency*********");
    console.log(wfreq);
    console.log("Identification*********");
    console.log(ID);
    console.log("Location*********");
    console.log(location);

// var ageArray = Object.values(age);
// var ageLabel = Object.keys(age);
// console.log(ageArray);
// console.log(ageLabel);

    //     // console.log(metaLabels);

    //     // On change to the DOM, call getData()
    //     d3.selectAll("#selDataset").on("change", getData);

    //    // Function called by DOM changes
    function getData() {
        var dropdownMenu = d3.select("#selDataset");

        //     // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");

        //     // Initialize an empty array for the demographic info
        var idArray = ["940"];

        if (dataset === '940') {
            //         data = ID;
            idArray = [ID, age, gender];
        }

        // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("plot", "x", [idArray]);
  //Plotly.restyle("plot", "y", [y]);
    }
    //     }
    //     else if (dataset == 'uk') {
    //         data = uk;
    //     }
    //     else if (dataset == 'canada') {
    //         data = canada;
    //     }
    //     // Call function to update the chart
    //     updatePlotly(data);
    //   }

    //   // Update the restyled plot's values
    //   function updatePlotly(newdata) {
    //     Plotly.restyle("pie", "values", [newdata]);
    //   }

    //   init();

    //     // d3.json("/data/samples.json").then((samples) => {
    //     //     var glblSamples;
    //     //     var names = samples.names;
    //     //     var samples = samples.samples;
    //     //     glblSamples = samples.filter(item => item.id === "940")[0].otu_ids;
    //     //     var sampleValues = samples.filter(item => item.id === "940")[0].sample_values;
    //     //     var myLabels = samples.filter(item => item.id === "940")[0].otu_labels;
    //     //var metadata=metadata.filter(item => item.id === "940")[0].id;
});