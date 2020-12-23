// from data.js
var tableData = data;

//Review data i nthe console log
console.log(tableData);

//Get a reference to table location in index.html file...if id use #, if class use quotes, if tag no need for .
var tbody = d3.select("tbody");

//

//build table use D3 to update each cell's text with data values
//(datetime,city state, county, shape, duration )
data.forEach(function(tableData) {
      console.log(tableData);
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
      });
    });

//Select the button
var button = d3.select("#filter-btn");

//Select the form
var form = d3.select("form")

//Create an event handler for filter-bin and the form
button.on("click", runEnter);
form.on("submit",runEnter);

//Run function runEnter when button is clicked
function runEnter() {
// Prevent the page from refreshing
    d3.event.preventDefault();
//Select the input element and retrevie the raw HTML code
    var inputElement = d3.select("#datetime");
//Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
  
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  
    console.log(filteredData);
    //Reset the table
    tbody.html("");

    //Rebuild the table using filterData
    filteredData.forEach(function(rebuild){

        var row = tbody.append("tr");
        Object.values(rebuild).forEach(function(value){

            //append a cell to the row for each object
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

