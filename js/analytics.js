let aptitude =
parseInt(localStorage.getItem("aptitudeScore")) || 0;

let technical =
parseInt(localStorage.getItem("technicalScore")) || 0;

let total =
aptitude + technical;

document.getElementById("aptitudeScore")
.innerHTML = aptitude;

document.getElementById("technicalScore")
.innerHTML = technical;

document.getElementById("totalScore")
.innerHTML = total;

const ctx =
document.getElementById("scoreChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [
            "Aptitude",
            "Technical"
        ],

        datasets: [{
            label: "Scores",

            data: [
                aptitude,
                technical
            ],

            borderWidth: 1
        }]
    },

    options: {

        responsive: true,

        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    }
});

function goDashboard()
{
    window.location.href =
    "dashboard.html";
}