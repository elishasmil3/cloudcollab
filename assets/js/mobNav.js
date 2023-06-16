var nav = 1;
var cssLink = document.createElement("link");      if (cssLink) {
  document.head.removeChild(cssLink);
  cssLink = null;
}
function mobNavToggle() {
  if (nav == 1) {
    document.getElementById("mobNavLinks").style.display = "flex";

    cssLink.rel = "stylesheet";
    cssLink.href = "./assets/css/re.css";
    cssLink.type = "text/css";

    document.head.appendChild(cssLink);

    return (nav = 0);
  } else if (nav == 0) {
    document.getElementById("mobNavLinks").style.display = "none";

    if (cssLink) {
      document.head.removeChild(cssLink);
    }
    return (nav = 1);
  }
}

// function mobNavHide() {
//   setTimeout(() => {
//     document.getElementById("mobNavLinks").style.display = "none";
//   }, 1000);

// }
