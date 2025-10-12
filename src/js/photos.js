const nocache = `?nocache=${Date.now()}`;
fetch(`assets/data/photos.json${nocache}`)
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