function use_button() {
    document.getElementById('buttonError').addEventListener('click', async function () {
        // URL del servidor al que se realizará la petición
        var url = 'http://localhost:2701/error/test';
        // Realiza la petición utilizando fetch
        let result = await fetch(url);
        let response_area = document.getElementById("button_response")
        response_area.innerHTML = await result.text();
        // Raw Fetch Data
    });
}
use_button();