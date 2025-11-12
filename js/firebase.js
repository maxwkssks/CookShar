// ✅ Firebase SDK import (CDN 방식)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ✅ Firebase 설정 (⚠️ 네 프로젝트 설정으로 교체)
const firebaseConfig = {
  apiKey: "AIzaSyB3K5IaW2QsVhXdQnv04CVUVTBBC77moYU",
  authDomain: "sportverse-4c388.firebaseapp.com",
  projectId: "sportverse-4c388",
  storageBucket: "sportverse-4c388.firebasestorage.app",
  messagingSenderId: "924408233603",
  appId: "1:924408233603:web:edc7c6b18cff16bd2765b6",
  measurementId: "G-S1EF7GY13L"
};


// ✅ Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("✅ Firebase initialized:", app.name);

// ===== 예시 1: Firestore 데이터 실시간 가져오기 =====
const gamesCol = collection(db, "games");

// 실시간 감시 (데이터 변경 시 자동 반영)
onSnapshot(gamesCol, (snapshot) => {
  console.log("📡 실시간 업데이트 감지:");
  snapshot.docs.forEach(doc => {
    console.log("🧾 문서:", doc.id, doc.data());
  });
});

// ===== 예시 2: 새 경기 추가 =====
// (테스트용 버튼을 눌러서 실행 가능하게 하고 싶다면 주석 해제)
// addDoc(gamesCol, {
//   homeTeamId: "ROKS",
//   awayTeamId: "WHALES",
//   status: "live",
//   inning: 1,
//   date: new Date()
// }).then(docRef => {
//   console.log("✅ 새 경기 추가됨:", docRef.id);
// }).catch(err => {
//   console.error("❌ 오류 발생:", err);
// });

export { db };
