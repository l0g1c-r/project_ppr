const pxlSize = document.getElementById("pxlSize");

window.onresize = () => pxlSize.textContent = window.innerWidth;

// window.onresize = () => {
//     pxlSize.textContent = window.innerWidth;
// }