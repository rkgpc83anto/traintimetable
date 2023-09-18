document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item) => {
        const title = item.querySelector(".accordion-title");
        const content = item.querySelector(".accordion-content");

        title.addEventListener("click", function () {
            content.classList.toggle("active");
            if (content.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});