document.getElementById("generateBtn").addEventListener("click", () => {
    const language = document.getElementById("language").value;
    const framework = document.getElementById("framework").value;

    fetch("/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, framework })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById("output").innerText = "Error: " + data.error;
        } else {
            document.getElementById("output").innerText = data.generated_code;
        }
    })
    .catch(error => console.error("Error:", error));
});