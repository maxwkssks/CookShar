document.addEventListener("DOMContentLoaded", () => {
  // 샘플 데이터 (나중에 Firestore에서 불러올 수 있음)
  const players = ["RiGuRi", "타치타치", "감자도리", "호떡", "Yaminseo"];
  const averages = [0.429, 0.403, 0.387, 0.354, 0.333];
  const homeRuns = [8, 7, 6, 5, 3];
  const teamScores = ["ROKS", "Whales", "Krakens", "Comets", "Marines"];
  const totalScores = [21, 18, 17, 14, 13];

  // 1️⃣ 타율 상위 TOP5
  new Chart(document.getElementById("avgChart"), {
    type: "bar",
    data: {
      labels: players,
      datasets: [{
        label: "타율",
        data: averages,
        backgroundColor: "#3ba4ff"
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { color: "#f8fafc" } },
        x: { ticks: { color: "#f8fafc" } }
      }
    }
  });

  // 2️⃣ 홈런 순위
  new Chart(document.getElementById("hrChart"), {
    type: "line",
    data: {
      labels: players,
      datasets: [{
        label: "홈런 수",
        data: homeRuns,
        fill: true,
        backgroundColor: "rgba(59,164,255,0.2)",
        borderColor: "#3ba4ff",
        tension: 0.3
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { color: "#f8fafc" } },
        x: { ticks: { color: "#f8fafc" } }
      },
      plugins: {
        legend: { labels: { color: "#f8fafc" } }
      }
    }
  });

  // 3️⃣ 팀별 득점 총합
  new Chart(document.getElementById("teamScoreChart"), {
    type: "doughnut",
    data: {
      labels: teamScores,
      datasets: [{
        data: totalScores,
        backgroundColor: [
          "#3ba4ff", "#ffdd57", "#ff5757", "#00c896", "#9b6bff"
        ],
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: { color: "#f8fafc" }
        }
      }
    }
  });
});
