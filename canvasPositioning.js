function positionCanvasBelowImage() {
  const img = document.getElementById('sigil');
  const canvas = document.querySelector('canvas');

  if (!img || !canvas) return;

  // Ensure the image has loaded before measuring
  if (img.complete) {
    const offset = img.offsetHeight * 0.65; // how far down the page it is
    canvas.style.position = 'absolute';
    canvas.style.top = offset + 'px';
    canvas.style.left = '0';
    // canvas.style.zIndex = '1';
    canvas.style.width = '100%';
  } else {
    img.onload = () => positionCanvasBelowImage(); // retry once image loads
  }
}

// Run once after short delay to allow p5 to create the canvas
window.addEventListener('load', () => {
  setTimeout(positionCanvasBelowImage, 100); // short delay to wait for canvas
});

// Optional: reposition on window resize
window.addEventListener('resize', positionCanvasBelowImage);