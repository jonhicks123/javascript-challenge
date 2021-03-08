// from data.js
var tableData = data;
console.log(tableData);

// Get table body reference
var tbody = d3.select("tbody");

// Get UFO values for columns
tableData.forEach((ufo) => {
    console.log(ufo);

    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// When button is clicked, grab all the data based on the date entered.
var button = d3.select("#filter-btn");
button.on("click", function() {

// Remove table with all initial data
d3.select("tbody").html("");
// Stop the page from refreshing    
d3.event.preventDefault();

// Grab the date value based on user input
var date = d3.select("#datetime").property("value");
console.log(date);

// Show the filtered data after button is pushed.
var filterData = tableData.filter(ufo => ufo.datetime === date);
console.log(filterData);

filterData.forEach((ufo) => {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});


