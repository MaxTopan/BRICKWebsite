fetch("assets/bootlegs.json")
    .then(res => res.json())
    .then(bootlegs => {
        const container = document.getElementById("main-container");
        bootlegs.reverse();
        bootlegs.forEach(bootleg => {
            /* ID, Date, Artist, Location, Description, ImageUrl, AudioUrl */

            const date = new Date(bootleg["Date"]);
            const artist = bootleg["Artist"];
            const location = bootleg["Location"];
            const description = bootleg["Description"];
            const imageUrl = bootleg["ImageUrl"];
            const audioUrl = bootleg["AudioUrl"];

            container.innerHTML += `
            <div class="bootleg-details">
                <p>${date.toLocaleDateString()} - ${artist}</p>
                <p>@ ${location}</p>
                <img src="${imageUrl}">
                <p>${description}</p>
                <audio controls class="bootleg-audio">
                    <source src="${audioUrl}" type="audio/mp3">
                    Denied by HTML5 - try another machine.
                </audio>
            </div>`
        });
    });