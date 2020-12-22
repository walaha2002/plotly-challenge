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
// //var metadata;

function getData(names) {

    //Assign dropdown to a variable
    var dropdownMenu = d3.select("#selDataset");
    //console.log(names)

    // Append values to dropdown
    names.forEach(name => {

        var selectedOption = dropdownMenu.append('option')
            .text(name)
            .attr("value", name);
    })
    //buildPlot(names[0]);
    populatePanel(names);
};

// // Note the extra brackets around 'x' and 'y'
// Plotly.restyle("sample-metadata", "x", [idArray]);
// //Plotly.restyle("plot", "y", [y]);

//function buildPlot(sample) {
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
        x: slceGlblSamples.map(otu_id => `${otu_id}`),
        //x: glblSamples.slice(0,10).reverse(),
        y: sampleValues.slice(0, 10).reverse(),
        mode: 'markers',
        marker: sampleValues.slice(0, 10).reverse(),
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
//};
//init();
function populatePanel(sample) {
    //Get metadata

    d3.json("samples.json").then((metadata) => {
        // Use the map method to return specific values in the array
        var metadata = metadata.metadata;
        // var age = metadata.map(a => a.age);
        // var ethnicity = metadata.map(a => a.ethnicity);
        // var location = metadata.map(a => a.location);
        // var wfreq = metadata.map(a => a.wfreq);
        // var bbtype = metadata.map(a => a.bbtype);
        // var gender = metadata.map(a => a.gender);
        // var ID = metadata.map(a => a.id);

        // console.log("Metadata*********");
        // console.log(metadata);
        // console.log("Age*********");
        // console.log(age);
        // console.log("Gender*********");
        // console.log(gender);
        // console.log("Ethnicity*********");
        // console.log(ethnicity);
        // console.log("bbtype*********");
        // console.log(bbtype);
        // console.log("Wash Frequency*********");
        // console.log(wfreq);
        // console.log("Identification*********");
        // console.log(ID);
        // console.log("Location*********");
        // console.log(location);
        //var age = age[0];

        var panel1 = d3.select("#sample-metadata");
        panel1.html("");


        Object.entries(metadata[0]).forEach(([key, value]) => {
            panel1.append("h5").text(`${key}:${value}`);
        })
    });
}
 //
        // })

        //buildPlot(names[0]);
        // Initialize array
        // var x = [];
        // if 




        //Plotly.restyle("plot", "labels", [Object.keys(data[selectedOption])]); 
        // var firstID = names[0];
        // demoChart(firstID);
        // buildMeta(firstID);




// Object.entries(selectedOption).forEach(([key, value]) => {
//     panel - body.append("h3").text(`${key}:${value}`);

//         //Plotly.restyle("panel panel-primary", "labels", [Object.keys(name[selectedOption])]);



//     // Assign the value of the dropdown menu option to a variable
// var dataset = dropdownMenu.property("value");

// //     // Initialize an empty array for the demographic info
// var idArray = [];

// if (dataset === '940') {
//     //         data = ID;
//     idArray = [ID, age, gender];

// }

    // var ageArray = Object.values(age);
    // var ageLabel = Object.keys(age);
    // console.log(ageArray);
    // console.log(ageLabel);

    //     // console.log(metaLabels);

    //     // On change to the DOM, call getData()
    //     d3.selectAll("#selDataset").on("change", getData);

    //    // Function called by DOM changes

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
