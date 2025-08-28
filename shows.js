let pastShowsDiv;
let upcomingShowsDiv;
let now;

function preload() {
    shows = loadTable("assets/shows.csv", "csv", "header");
    pastShowsDiv = document.getElementById("past-shows");
    upcomingShowsDiv = document.getElementById("upcoming-shows");
    now = new Date();
}

function setup() {
    const rowCount = shows.getRowCount();

    let pastShowHtml = "";
    let upcomingShowHtml = "";

    for (let i = 0; i < rowCount; i++) {
        // ShowID,Date,Location,Lineup,OtherDetails,TicketLink
        let date = new Date(shows.get(i, "Date"));
        let location = shows.get(i, "Location");
        let lineup = shows.get(i, "Lineup");
        let otherDetails = shows.get(i, "OtherDetails");
        let ticketLink = shows.get(i, "TicketLink");
        let ticketHtml = "";

        if (ticketLink && date > now) {
            ticketHtml = `<a href="${ticketLink}" target="_blank">Tix Here</a>`
        }

        if (lineup) {
            lineup = "With: " + lineup;
        }

        let currHtml = `
        <div class="show-details">
            <p>${date.toLocaleDateString()}</p>
            <p>${location}</p>
            <p>${lineup}</p>
            <p>${otherDetails}</p>
            ${ticketHtml}
            </div>`

        if (date < now) { // past shows
            pastShowHtml += currHtml;
        } else { // upcoming shows
            upcomingShowHtml += currHtml;
        }
    }
    pastShowsDiv.innerHTML = pastShowHtml;
    upcomingShowsDiv.innerHTML = upcomingShowHtml;
}