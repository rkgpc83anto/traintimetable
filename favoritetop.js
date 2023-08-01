function displayFavorites() {
  const favoriteList = document.getElementById("favoriteList1");
  favoriteList.innerHTML = ""; // リストをクリア

  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(favorites);
    if (favorites.length === 0) {
      const li = document.createElement("li");
      li.textContent = "お気に入り登録された駅はありません";
      favoriteList.appendChild(li);
    } else {
      favorites.forEach(item => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = item.siteName;
        link.href = item.url;
        li.appendChild(link);
        favoriteList.appendChild(li);
      });
    }
  } else {
    const li = document.createElement("li");
    li.textContent = "お気に入り商品はありません";
    favoriteList.appendChild(li);
  }
}

// ページがロードされたときに初回表示
displayFavorites();