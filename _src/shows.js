fetch("assets/shows.json")
    .then(res => res.json())
    .then(shows => {
        let pastShowsDiv = document.getElementById("past-shows");
        let upcomingShowsDiv = document.getElementById("upcoming-shows");
        let pastShowsHtml = "";
        let upcomingShowsHtml = "";
        let now = new Date(); now.setHours(0); now.setMinutes(0);

        shows.sort((a, b) => new Date(a.Date) - new Date(b.Date));
        shows.forEach(show => {
            if (show["Visible"] === "No") {
                return;
            }

            let date = new Date(show["Date"]);
            if (date === "undefined" || date == "Invalid Date") {
                return;
            }

            let city = show["City"];
            let venue = show["Venue"];
            let lineup = show["Lineup"];
            let otherDetails = show["OtherDetails"];
            let ticketLink = show["TicketLink"];
            let ticketHtml = "";
            let videoID = show["VideoID"];
            let videoHtml = "";

            if (ticketLink && date > now) {
                ticketHtml = `<a href="${ticketLink}" target="_blank">Tix Here</a>`
            }

            if (videoID) {
                videoHtml = `
                <div class="wrapper">
                    <div class="h_iframe">
                        <iframe height="2" width="2" src="http://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>`

            }

            if (lineup) {
                lineup = "With: " + lineup;
            }

            if (venue && city) {
                city = " - " + city;
            }

            let currHtml = `
            <div class="show-details">
                <p>${date.toLocaleDateString()}</p>
                <p>${venue}${city}</p>
                <p>${lineup}</p>
                <p>${otherDetails}</p>
                ${ticketHtml}
                ${videoHtml}
            </div>`

            if (date < now) { // past shows
                pastShowsHtml = currHtml + pastShowsHtml;
            } else { // upcoming shows
                upcomingShowsHtml += currHtml;
            }
        });

        pastShowsDiv.innerHTML = pastShowsHtml;
        upcomingShowsDiv.innerHTML = upcomingShowsHtml;
    });