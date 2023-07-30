      // 現在の日付と時間を表示する関数
      function displayDateTime() {
        const dateElement = document.getElementById("dateDisplay");
        const timeElement = document.getElementById("timeDisplay");
  
        // 現在の日付を取得
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
        const day = ("0" + currentDate.getDate()).slice(-2);
        const formattedDate = month + "月" + day + "日";
  
        // 現在の時間を取得
        const hours = ("0" + currentDate.getHours()).slice(-2);
        const minutes = ("0" + currentDate.getMinutes()).slice(-2);
        const seconds = ("0" + currentDate.getSeconds()).slice(-2);
        const formattedTime = hours + ":" + minutes + ":" + seconds;
  
        // 日付と時間を表示
        dateElement.textContent =  formattedDate;
        timeElement.textContent =  formattedTime;
      }
  
      // 1秒ごとに日付と時間を更新
      setInterval(displayDateTime, 1000);
  
      // ページがロードされたときに初回表示
      displayDateTime();