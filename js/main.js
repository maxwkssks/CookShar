// js/main.js
import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

document.getElementById("saveBtn").addEventListener("click", async () => {
  const name = document.getElementById("playerName").value.trim();
  const pos = document.getElementById("position").value;
  const atBat = parseInt(document.getElementById("atBat").value) || 0;
  const hit = parseInt(document.getElementById("hit").value) || 0;
  const hr = parseInt(document.getElementById("hr").value) || 0;
  const rbi = parseInt(document.getElementById("rbi").value) || 0;

  if (!name) return alert("⚠️ 선수 이름을 입력하세요!");

  try {
    await addDoc(collection(db, "records"), {
      name, pos, atBat, hit, hr, rbi,
      avg: atBat > 0 ? (hit / atBat).toFixed(3) : "0.000",
      date: serverTimestamp()
    });
    alert("✅ Firestore에 기록이 저장되었습니다!");
  } catch (err) {
    console.error("Firestore 오류:", err);
    alert("저장 실패: 콘솔을 확인하세요.");
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.querySelectorAll("input[type='number']").forEach(i => i.value = 0);
  document.getElementById("playerName").value = "";
});
