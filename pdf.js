var url = 'resume_2024.pdf'; // Replace with your PDF URL
//var url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
var pdfContainer = document.getElementById('pdfContainer');
var pdfLoaded = false; // Prevents redundant loading

function renderPDF(url) {
    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdfContainer.innerHTML = ''; // Clear previous content
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            pdf.getPage(pageNum).then(page => {
                var scale = pdfContainer.clientWidth / page.getViewport({ scale: 1 }).width;
                var viewport = page.getViewport({ scale: scale });

                var canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                pdfContainer.appendChild(canvas);

                var context = canvas.getContext('2d');
                var renderContext = { canvasContext: context, viewport: viewport };
                page.render(renderContext);
            });
        }
        pdfLoaded = true; // Mark as loaded
    }).catch(error => {
        console.error("Error loading PDF:", error);
    });
}

// Render PDF only when tab becomes visible
document.addEventListener("visibilitychange", function () {
    if (!document.hidden && !pdfLoaded) {
        renderPDF(url);
    }
});

// Adjust PDF scaling on window resize
window.addEventListener('resize', function () {
    if (pdfLoaded) {
        renderPDF(url);
    }
});