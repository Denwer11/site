// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
    // Если текущий адрес содержит "master.css"
    if (theme.getAttribute("href") == "master.css") {
        // …то переключаемся на "dark.css"
        theme.href = "dark.css";
        // В противном случае…
    } else {
        // …переключаемся на "master.css"
        theme.href = "master.css";
    }
});