$(document).ready(function () {
    // write your code here

    $.getJSON("data.json", function (data) {
        for(let i = 0; i < data.length; i++){

            let row= $("<tr></tr>");

            let nameCell = $("<td></td>").text(data[i].name);
            let descCell = $("<td></td>").text(data[i].description);

            let lat = data[i].location[0];
            let long = data[i].location[1];
            let link = "https://www.google.com/maps?q=" + lat + "," + long;
            let linkTag = $("<a></a>")
                .attr("href", link)
                .text("open in Google Maps");
            
            let linkCell = $("<td></td>").append(linkTag);

            row.append(nameCell);
            row.append(descCell);
            row.append(linkCell);

            $("tbody").append(row);
        }
    });
});