/* scripts.js */
document.getElementById("revealMessage")?.addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
});

if (document.getElementById("statusChart")) {
    const ctx = document.getElementById("statusChart").getContext("2d");
    const chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Server 1", "Server 2", "Database"],
            datasets: [{
                label: "Status",
                data: [1, 0.5, 1],
                backgroundColor: ["green", "orange", "green"]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });
}

document.querySelector("form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("confirmation").style.display = "block";
});
