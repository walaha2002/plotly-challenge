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
    var glblsamples;
    var names = samples.names;
    var samples = samples.samples;
    glblsamples = samples.filter(item=>item.id==="940")[0].otu_ids;
    var labels = samples.filter(item=>item.id==="940")[0].sample_values;
    //var metadata = samples.metadata;
    //     var otu_ids = samples.names;
    //     var sample_values = samples.sample_values.sample_values;
    //     var otu_labels = samples.otu_labels.otu_labels;

    console.log(names);
    console.log(samples);
    console.log(glblsamples);
    console.log(labels);
    // var toPlot = [{
    //     type: 'bar',
    //     x: names,
    //     y: samples,
    //     orientation: 'h'
    // }];
    // Plotly.newPlot('plot', toPlot);
});



        // console.log(sample_values);
        // console.log(otu_labels);

    // });

// const data = d3.json("/data/samples.json");
// // console.log(data);

// var names = Object.values(data.metadata);
// // var samples = Object.values(samples.samples);

// console.log(names);

// function init() {
//     var plotData = [{
//         labels: Object.keys(data.names),
//         values: names,
//         type: 'pie'
//     }]
//     console.log(Object.keys(names));
//     console.log(names);
//     console.log(data);

//     var layout = {
//         margins: {
//             t: 200,
//             r: 100,
//             l: 100,
//             b: 100
//         },
//         title: "Streaming Music Provider for US"
//     };

//     Plotly.newPlot("pie", plotData, layout);
// }
// init();
// let names = data.names;
// console.log(names[0]);

// // d3.json("/data/samples.json").then((data)=>{
// // var 

// // })

// // console.log("*****************");

// const myKeys = Object.keys(data);
// // console.log(myKeys);
// // console.log("*****************");

// const names = data.names;
// const samples = data.samples;
// let mySample = "953";
// let myData = samples.filter(sample =>sample.id===mySample);

// console.log(names);
// console.log(samples);
// var names = data.names;
// var samples = data.samples;

// Call updatePlotly() when a change takes place to the DOM
// d3.select("#selDataset").on("change", updatePlotly);



    //   var layout = {
    //     height: 600,
    //     width: 800

//     Plotly.newPlot("pie", plotData, layout);
// }//init();


//  let mySample = "953";
//  let myData = samples.filter(sample => sample.id===mySample);
// console.log(myData[0]);


// console.log("^^^^^^^^^^^^^^^^^^^^^^^");
//console.log(data);
// function unpack(rows, index) {
//     return rows.map(function (row) {
//         return row[index];
//     });
// }



    // d3.json("/data/samples.json").then((samples) => {
    //     var otu_ids = samples.names;
    //     var sample_values = samples.sample_values.sample_values;
    //     var otu_labels = samples.otu_labels.otu_labels;


    //     console.log(otu_ids);
        // console.log(sample_values);
        // console.log(otu_labels);

    // });

// });


//     // Sort descending to then get the top 10 OTUs
    // data.sort((a,b) => a-b);
    // console.log(data);

//});
//     data.sort(function (a, b) {
//         return (b.names) - (a.names);
//     });

//     // Slice the first 10 objects for plotting

//     // Reverse the array
    //  data = data.reverse();
    //  console.log(data);
//)};

//     console.log(data);

// });

//     //Create the Traces
    // var trace1 = {
    //     x: samples.names,
    //     y: samples.otu_labels,
    //     type: 'horizontalBar',
    //     name: "Operational Taxonomic Units",
    //     label: samples.otu_labels
    // };

//     //Create the data array for the plot
    //  var data = [trace1];

    //Define the plot layout
    // var layout = {
    //     title: "Operational Taxonomic Units",
    //     xaxis: {title: "something"},
    //     yaxis: {title: "something else"}
    // };

//     //Plot the chart to a div tag with id "plot"
    // Plotly.newPlot("plot",data,layout);
// });