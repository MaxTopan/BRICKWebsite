/* <div class="gallery">
    <a target="_blank" href="assets/SigilVectorWhite-cropped.svg">
      <img src="assets/SigilVectorWhite-cropped.svg" alt="Cinque Terre" width="600" height="400">
    </a>
  </div> */

fetch("assets/photos.json")
  .then(res => res.json())
  .then(files => {
    const photosContainer = document.getElementById("photos-container");
    files.forEach(file => {
      //const img = document.createElement("img");
      const imgsrc = "assets/photos/" + file;
      photosContainer.innerHTML += `
      <div class="gallery responsive">
        <a target="_blank" href="${imgsrc}">
        <img src="${imgsrc}" >
        </a>
      </div>`
      // photosContainer.appendChild(img);
      console.log(file);
    });
  });
