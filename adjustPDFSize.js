function adjustPDFSize() {
    let iframe = document.getElementById("pdfViewer");
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let aspectRatio = screenWidth / screenHeight;

    console.log(aspectRatio);

    if (aspectRatio < 0.75) { // Portrait Mode (more height than width)
        iframe.style.height = "60vh";
        iframe.style.width = "80vw"; // Reduce width for better fit
    } else { // Landscape Mode (more width than height)
        iframe.style.height = "120vh"; // Slightly smaller to ensure it fits
        iframe.style.width = "45vw";
    }
}

// Adjust PDF on load and when resizing
window.addEventListener("load", adjustPDFSize);
window.addEventListener("resize", adjustPDFSize);
window.addEventListener("orientationchange", adjustPDFSize);