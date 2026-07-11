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

let selectedDate = null;



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



  const firstDay =
    new Date(year, month, 1).getDay();



  const lastDate =
    new Date(year, month + 1, 0).getDate();




  for(let i = 0; i < firstDay; i++){

    const empty =
      document.createElement("div");

    empty.className = "day empty";

    calendar.appendChild(empty);

  }



  for(let day = 1; day <= lastDate; day++){


    const cell =
      document.createElement("div");


    cell.className = "day";


    cell.textContent = day;



    cell.addEventListener("click",()=>{


      selectedDate =
      `${year}年${month+1}月${day}日`;



      document.getElementById("selected-date")
      .textContent =
      selectedDate + " の予定";


    });



    calendar.appendChild(cell);


  }


}



// 月移動


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




// 予定追加


document
.getElementById("add-schedule")
?.addEventListener("click",()=>{


  const input =
  document.getElementById("schedule-input");


  const list =
  document.getElementById("schedule-list");


  const family =
  document.getElementById("family-select");



  if(!selectedDate){

    alert("まず日付を選んでね🌊");

    return;

  }



  if(input.value === ""){

    alert("予定を書いてね⚓");

    return;

  }



  const item =
  document.createElement("div");



  item.className =
  "schedule-item " + family.value;



  const icon = {

    john:"🐢",

    kana:"🐋",

    naru:"🐡"

  };



  item.textContent =
  `${icon[family.value]} ${selectedDate} ${input.value}`;



  list.appendChild(item);



  input.value = "";



});




// 最初の表示

createCalendar(currentDate);