// Read in json data
// const data = d3.json("/data/samples.json");
//console.log(d3.json("/data/samples.json"));
//console.log(data);
// function unpack(rows, index) {
//     return rows.map(function (row) {
//         return row[index];
//     });
// }



    d3.json("/data/samples.json").then((samples) => {
        var otu_ids = samples.sample_values.id;
        var sample_values = samples.sample_values.sample_values;
        var otu_labels = samples.sample_values.otu_ids;
        var names = samples.names;

        console.log(otu_ids);
        console.log(sample_values);
        console.log(otu_labels);
        console.log(names);
    });

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
//     var trace1 = {
//         x: samples.names,
//         y: samples.otu_labels,
//         type: 'horizontalBar',
//         name: "Operational Taxonomic Units",
//         label: samples.otu_labels
//     };

//     //Create the data array for the plot
//     var data = [trace1];

//     //Define the plot layout
//     var layout = {
//         title: "Operational Taxonomic Units",
//         xaxis: {title: "something"},
//         yaxis: {title: "something else"}
//     };

//     //Plot the chart to a div tag with id "plot"
//     Plotly.newPlot("plot",data,layout);
// });