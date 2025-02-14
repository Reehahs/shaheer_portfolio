function adjustPDFSize() {
    let iframe = document.getElementById("pdfViewer");
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let aspectRatio = screenWidth / screenHeight;

    if (aspectRatio < 0.75) { // Portrait Mode (more height than width)
        iframe.style.height = "100vh";
        iframe.style.width = "90vw"; // Reduce width for better fit
    } else { // Landscape Mode (more width than height)
        iframe.style.height = "90vh"; // Slightly smaller to ensure it fits
        iframe.style.width = "100vw";
    }
}

// Adjust PDF on load and when resizing
window.addEventListener("load", adjustPDFSize);
window.addEventListener("resize", adjustPDFSize);
window.addEventListener("orientationchange", adjustPDFSize);