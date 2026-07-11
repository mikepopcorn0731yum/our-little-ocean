// 🌊 Our Little Ocean
// 伊藤家の食卓 メインスクリプト

console.log("🌊 伊藤家の航海日誌 出港しました！");


document.addEventListener("DOMContentLoaded", () => {

  const message = document.querySelector(".ocean-message");

  if (message) {
    message.addEventListener("click", () => {
      alert("🐢🐋🐡 家族3人の小さな海へようこそ🌊");
    });
  }

});