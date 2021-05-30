// Step 1: Get the data 
var tableData = data;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Step 2: Create HTML object references
var tbody = d3.select("tbody");
var searchDate = d3.select("#searchDate");
var btnSearch = d3.select("#btnSearch");
var btnReset = d3.select("#btnReset");


var loadTableRows = (whichData) => { 
    tbody.html("");
	
	
	whichData.forEach(dataRow => { // Loop through each row:
	
		var tblRow = tbody.append("tr");  
		
		tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]))
	});
}

loadTableRows(tableData);



btnSearch.on("click", () => {

	d3.event.preventDefault();

    var searchedDate = searchDate.property("value");
	
     var tableData_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);
	

	if(tableData_Filtered.length !== 0) {
		loadTableRows(tableData_Filtered);
	}
	else {

		tbody.html("");
				tbody.append("tr").append("td").text("No sightings on this date");
	}
})

// Reset button - click 
btnReset.on("click", () => {

	document.getElementById("searchDate").value='';
	
	// Load original dataset
	loadTableRows(tableData);
})