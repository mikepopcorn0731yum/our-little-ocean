// 🌊 Our Little Ocean
// 伊藤家の食卓 メインスクリプト


console.log("🌊 伊藤家の航海日誌 出港しました！");


// 今日の日付

const today = new Date();

const dateArea = document.getElementById("today-date");

if (dateArea) {

  dateArea.textContent =
    `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日の航海`;

}


// カレンダー

let currentDate = new Date();



function createCalendar(date) {


  const year = date.getFullYear();

  const month = date.getMonth();



  const title =
    document.getElementById("calendar-title");


  const calendar =
    document.getElementById("calendar");



  if (!calendar) return;



  title.textContent =
    `${year}年${month + 1}月`;



  calendar.innerHTML = "";



  // 月初の曜日

  const firstDay =
    new Date(year, month, 1).getDay();



  // 月の日数

  const lastDate =
    new Date(year, month + 1, 0).getDate();




  // 空白

  for(let i = 0; i < firstDay; i++){

    const empty =
      document.createElement("div");

    empty.className = "day empty";

    calendar.appendChild(empty);

  }




  // 日付

  for(let day = 1; day <= lastDate; day++){


    const cell =
      document.createElement("div");


    cell.className = "day";


    cell.textContent = day;



    calendar.appendChild(cell);


  }


}



// ボタン

document
.getElementById("prev-month")
?.addEventListener("click",()=>{

  currentDate.setMonth(
    currentDate.getMonth()-1
  );

  createCalendar(currentDate);

});



document
.getElementById("next-month")
?.addEventListener("click",()=>{

  currentDate.setMonth(
    currentDate.getMonth()+1
  );

  createCalendar(currentDate);

});



// 最初の表示

createCalendar(currentDate);