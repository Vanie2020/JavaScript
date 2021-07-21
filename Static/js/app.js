

//Read in list of objects from data.js and made a copy
var tableData = data;

//selected our empty tbody html tag
var tbody = d3.select("tbody")

function reset() {
    //d3.event.preventDefault();
    d3.select("tbody")
        .selectAll("tr").remove()
        .selectAll("td").remove();
    showtable(tableData)
}

//function to build table
function showtable(sightings) {
    tbody.html("")
    sightings.forEach((ufoRecord) => {
        var row = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        })
    })
}

// Builds table on website startup
showtable(tableData)


// function to filter table ON CLICK. Correlates to assignment on bottom of page "filterclck"
function filterclick() {
    //d3.event.preventDefault();
    reset();
    var dateinput = d3.select("#datetime").property("value");
    var cityinput = d3.select("#city").property("value");
    var stateinput = d3.select("#state").property("value");
    var countryinput = d3.select("#country").property("value");
    var shapeinput = d3.select("#shape").property("value");

//Boolean if user types ANYTHING in text box and its then filter to search for values 
    var filteredData = tableData
    if (dateinput) {
        filteredData = filteredData.filter(ufoRecord => ufoRecord.datetime === dateinput)
    }

    if (cityinput) {
        filteredData = filteredData.filter(ufoRecord => ufoRecord.city === cityinput)
    }

    if (stateinput) {
        filteredData = filteredData.filter(ufoRecord => ufoRecord.state === stateinput)
    }

    if (countryinput) {
        filteredData = filteredData.filter(ufoRecord => ufoRecord.country === countryinput)
    }

    if (shapeinput)
        filteredData = filteredData.filter(ufoRecord => ufoRecord.shape === shapeinput)

    console.log(filteredData)
    showtable(filteredData)
}



d3.select("#filter-btn").on("click", filterclick)

d3.select("#reset-btn").on("click", reset)

