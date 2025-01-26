function upDate(previewPic) {
    console.log("upDate triggered");
    console.log("PreviewPic Source:", previewPic.src);
    console.log("PreviewPic Alt:", previewPic.alt);

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("unDo triggered");

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

function initializeGallery() {
    console.log("Gallery initialized");

    let images = document.querySelectorAll(".preview");

    // Add tabindex to all images
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
