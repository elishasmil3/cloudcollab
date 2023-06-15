var nav = 1;
function mobNavToggle() {
  if (nav == 1) {
    document.getElementById("mobNavLinks").style.display = "flex";
    return (nav = 0);
  } else if (nav == 0) {
    document.getElementById("mobNavLinks").style.display = "none";
    return (nav = 1);
  }
}

// function mobNavHide() {
//   setTimeout(() => {
//     document.getElementById("mobNavLinks").style.display = "none";
//   }, 1000);

// }

