document.addEventListener('DOMContentLoaded', function () {
    var downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var institutionName = btn.closest('.institution').querySelector('h2').innerText;
            var documentType = btn.closest('.institution').querySelector('p').innerText.split(":")[1].trim();

            downloadDocument(institutionName, documentType);
        });
    });

    function downloadDocument(institutionName, documentType) {
        alert('Downloading ' + documentType + ' from ' + institutionName);
        // In a real scenario, you would implement actual file download logic on the server
    }
});
