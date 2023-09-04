function toggleFavorite() {
    const siteName = document.title; // ページのタイトルを取得してサイト名称とする
    const pageUrl = window.location.href; // 現在のページのURLを取得
    let favorites = localStorage.getItem("favorites");
    if (!favorites) {
      favorites = [];
    } else {
      favorites = JSON.parse(favorites);
    }
  
    // お気に入り登録済みの場合は削除、未登録の場合は追加
    const index = favorites.findIndex(item => item.url === pageUrl);
    if (index !== -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push({ siteName, url: pageUrl });
    }
  
    localStorage.setItem("favorites", JSON.stringify(favorites));
  
    updateFavoriteButton();
  }
  
  function updateFavoriteButton() {
    const button = document.getElementById("favoriteButton");
    const pageUrl = window.location.href;
    let favorites = localStorage.getItem("favorites");
    if (favorites) {
      favorites = JSON.parse(favorites);
      const index = favorites.findIndex(item => item.url === pageUrl);
      if (index !== -1) {
        // お気に入り登録済みの場合はfavorite_on.pngを表示
        button.innerHTML = '<img src="JR神お気に入り登録済み.JPG">';
      } else {
        // お気に入り未登録の場合はfavorite_off.pngを表示
        button.innerHTML = '<img src="JR神お気に入り登録.JPG">';
      }
    } else {
      // ローカルストレージにお気に入り情報がない場合はfavorite_off.pngを表示
      button.innerHTML = '<img src="JR神お気に入り登録.JPG">';
    }
  }
  updateFavoriteButton();