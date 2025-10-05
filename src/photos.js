fetch(`assets/photos.json?nocache=${Date.now()}`)
  .then(res => res.json())
  .then(files => {
    const photosContainer = document.getElementById("photos-container");
    files.reverse();
    files.forEach(file => {
      const imgsrc = "assets/photos/" + file;
      photosContainer.innerHTML += `
      <div class="gallery responsive">
        <a target="_blank" href="${imgsrc}">
        <img src="${imgsrc}" >
        </a>
      </div>`
    });
  });