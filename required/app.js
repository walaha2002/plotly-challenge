// Read in json data
// const data = d3.json("data/samples.json");
console.log(d3.json("/data/samples.json"));

d3.json("/data/samples.json").then((data) => {

    //Create the Traces
    var trace1 = {
        x: data.sample_values,
        y: data.otu_labels,
        type: 'horizontalBar',
        name: "Operational Taxonomic Units"
    }
});
