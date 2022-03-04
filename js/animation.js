let theme_1 = document.getElementById("theme1");
let theme_2 = document.getElementById("theme2");
let theme_3 = document.getElementById("theme3");
let changeTheme = document.querySelector("body");
let circlePosition = document.getElementById('circle-theme');

theme_1.addEventListener("click", () =>{
    changeTheme.setAttribute("id", "theme_1");
    circlePosition.style.justifyContent = "flex-start";
});

theme_2.addEventListener("click", () =>{
    changeTheme.setAttribute("id", "theme_2");
    circlePosition.style.justifyContent = "center";
});

theme_3.addEventListener("click", () =>{
    changeTheme.setAttribute("id", "theme_3");
    circlePosition.style.justifyContent = "flex-end";
});
