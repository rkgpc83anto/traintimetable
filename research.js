    // 駅名データを用意（サンプル）
    const stationData = [
      "大阪梅田(阪急神戸線)",
      "大阪梅田(阪急宝塚線)",
      "大阪梅田(阪急京都線)",
      "大阪梅田(阪神線)",
      "大阪",
      "梅田(御堂筋線)",
      "東梅田(谷町線)",
      "西梅田(四ツ橋線)",

      "中津(神戸線)",
      "中津(宝塚線)",
      "十三(神戸線)",
      "十三(宝塚線)",
      "十三(京都線)",

      "神崎川",
      "園田",
      "塚口(神戸本線)",
      "武庫之荘",
      "西宮北口(神戸本線)",
      "夙川(神戸本線)",
      "芦屋川",
      "岡本",
      "御影",
      "六甲",
      "王子公園",
      "春日野道",

      "神戸三宮(阪急・神戸高速線)",
      "神戸三宮(阪神)",
      "三ノ宮",
      "三宮(地下鉄)",

      "花隈",
      "高速神戸",
      "新開地(阪神線)",
      "新開地(神戸電鉄)",

      "今津(阪急線)",
      "阪神国道",
      "西宮北口(今津線)",
      "門戸厄神",
      "甲東園",
      "仁川",
      "小林",
      "逆瀬川",
      "宝塚南口",
      "宝塚(阪急線)",
      "宝塚(JR)",

      "塚口(伊丹線)",
      "稲野",
      "新伊丹",
      "伊丹",

      "夙川(甲陽線)",
      "苦楽園口",
      "甲陽園",
      // 他の駅のデータも追加
    ];

    // ユーザーが入力した駅名に対応するファイル名を持つオブジェクトを用意（サンプル）
    const stationFiles = {
      "大阪梅田(阪急神戸線)":"神大阪梅田.html",
      "大阪梅田(阪急宝塚線)":"宝大阪梅田.html",
      "大阪梅田(阪急京都線)":"京大阪梅田.html",

      "大阪梅田(阪神線)": ".html",
      "大阪": ".html",
      "梅田(御堂筋線),":".html",
      "東梅田(谷町線)":".html",
      "西梅田(四ツ橋線)":".html",


      "中津(神戸線)":"神中津.html",
      "中津(宝塚線)":"宝中津.html",
      "十三(神戸線)":"神十三.html",
      "十三(宝塚線)":"宝十三.html",
      "十三(京都線)":"京十三.html",
      "神崎川":"神崎川.html",
      "園田":"園田.html",
      "塚口(神戸本線)":"神戸線塚口.html",
      "武庫之荘":"武庫之荘.html",
      "西宮北口(神戸本線)":"西宮北口.html",
      "夙川 (神戸本線)":"夙川.html",
      "芦屋川":"芦屋川.html",
      "岡本":"岡本.html",
      "御影":"御影.html",
      "六甲":"六甲.html",
      "王子公園":"王子公園.html",
      "春日野道":"春日野道.html",

      "神戸三宮(阪急・神戸高速線)":"神戸三宮.html",
      "神戸三宮(阪神)": ".html",
      "三宮(地下鉄)": ".html",
      "三ノ宮": ".html",

      "花隈":"花隈.html",
      "高速神戸":"高速神戸.html",
      "新開地(阪神線)":"新開地.html",
      "新開地(神戸電鉄線)": ".html",

      "今津(阪急線)":"今津.html",
      "阪神国道": "阪神国道.html",
      "西宮北口(今津線)": "今津線西宮北口.html",
      "門戸厄神": "門戸厄神.html",
      "甲東園": "甲東園.html",
      "仁川": "仁川.html",
      "小林": "小林.html",
      "逆瀬川": "逆瀬川.html",
      "宝塚南口": "宝塚南口.html",
      "宝塚(阪急線)": "宝塚.html",

      "塚口(伊丹線)": "伊丹線塚口.html",
      "稲野": "稲野.html",
      "新伊丹": "新伊丹.html",
      "伊丹": "伊丹.html",

      "夙川(甲陽線)": "甲陽線夙川.html",
      "苦楽園口": "苦楽園口.html",
      "甲陽園": "甲陽園.html",
      // 他の駅のファイル名も追加
    };

    // ユーザーが入力フィールドに入力した際の処理
    function handleInput() {
      const input = document.getElementById("station").value;
      const stationList = document.getElementById("stationList");
      stationList.innerHTML = ""; // リストをクリア

      if (input.length === 0) {
        return; // 入力が空の場合は何も表示しない
      }

      // 入力に一致する駅名をフィルタリングしてリストに表示
      const matchedStations = stationData.filter(station => station.includes(input));
      matchedStations.forEach(station => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = station;
        // リンク先を無効化
        link.href = "javascript:void(0)";
        link.addEventListener("click", function(event) {
          event.preventDefault(); // デフォルトのクリック動作をキャンセル
          // リンクがクリックされたときの処理を記述
          // 例：別ページに飛ばす代わりに、特定の処理を実行するなど
          if (stationFiles[station]) {
            window.location.href = stationFiles[station]; // リンク先に飛ぶ
          }
        });
        li.appendChild(link);
        stationList.appendChild(li);
      });
    }

    // 入力フィールドにイベントリスナーを追加
    document.getElementById("station").addEventListener("input", handleInput);