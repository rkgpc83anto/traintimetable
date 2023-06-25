document.addEventListener("DOMContentLoaded", function() {
    var myClass = document.getElementsByClassName("timerHidden");
    for (var i = 0; i < myClass.length; i++) {
        var appearTime = myClass[i].getAttribute("data-appear_time");
        var disappearTime = myClass[i].getAttribute("data-disappear_time");
        var threshould_start = new Date();
        var threshould_end = new Date();
        var parts = appearTime.split(":");
        threshould_start.setHours(parts[0], parts[1], parts[2], 0);
        parts = disappearTime.split(":");
        threshould_end.setHours(parts[0], parts[1], parts[2], 0);
        var current = new Date();
        if (threshould_start < current && threshould_end > current) {
            myClass[i].classList.add("timerVisible");
        } else {
            myClass[i].classList.remove("timerVisible");
        }
    }
  });
  const timer = 60000 // ミリ秒で間隔の時間を指定
  window.addEventListener('load', function() {
    setInterval('location.reload()', timer);
  });