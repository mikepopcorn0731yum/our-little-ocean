body {
  margin: 0;
  padding: 0;
  font-family: "Hiragino Maru Gothic ProN", "Yu Gothic", sans-serif;
  background: linear-gradient(
    #aee7ff,
    #eafaff
  );
  color: #345;
  text-align: center;
}


/* ヘッダー */

header {
  padding: 35px 20px;
}

h1 {
  font-size: 2.4rem;
  color: #0077aa;
  margin-bottom: 10px;
}

header p {
  font-size: 1.5rem;
  margin: 5px;
}

header span {
  color: #557;
}


/* 全体 */

main {
  padding: 15px;
}


/* 今日 */

.today {
  background: rgba(255,255,255,0.8);
  border-radius: 25px;
  padding: 20px;
  margin: 20px auto;
  max-width: 500px;
}


/* 家族予定 */

.family {
  background: rgba(255,255,255,0.85);
  border-radius: 30px;
  padding: 25px;
  margin: 20px auto;
  max-width: 500px;
}


/* 家族カード */

.member {
  border-radius: 20px;
  padding: 15px;
  margin: 15px 0;
  font-size: 1.2rem;
}


/* ジョン */

.john {
  background: #eaffc8;
}


/* かなちゃん */

.kana {
  background: #c9f3ff;
}


/* なるくん */

.naru {
  background: #fff4a8;
}


/* カレンダー */

.calendar-area {
  background: rgba(255,255,255,0.85);
  border-radius: 30px;
  padding: 25px;
  margin: 20px auto;
  max-width: 500px;
}


#calendar {
  background: white;
  border-radius: 20px;
  padding: 30px;
}


/* フッター */

footer {
  padding: 30px;
  font-size: 0.9rem;
}


/* スマホ対応 */

@media(max-width:600px){

  h1 {
    font-size:2rem;
  }

  .family,
  .calendar-area,
  .today {
    margin:15px;
  }

}