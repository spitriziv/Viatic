/** LIGHTMODE  */

var lightSwitch = document.getElementById("lightSwitch");
window.addEventListener("load", function () {
  if (lightSwitch) {
    initTheme();
    lightSwitch.addEventListener("change", function () {
      resetTheme();
    });
  }
});

/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'light'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  var lightThemeSelected =
    localStorage.getItem("lightSwitch") !== null &&
    localStorage.getItem("lightSwitch") === "light";
  lightSwitch.checked = lightThemeSelected;
  lightThemeSelected
    ? document.body.setAttribute("data-theme", "light")
    : document.body.removeAttribute("data-theme");
}

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to light so the light-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (lightSwitch.checked) {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("lightSwitch", "light");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("lightSwitch");
  }
}

  <!-- IE 11 polyfill for CSS and Custom Properties -->

    nomodule>window.MSInputMethodContext && document.documentMode && document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-ie11@5/css/bootstrap-ie11.min.css"><script src="https://cdn.jsdelivr.net/npm/ie11-custom-properties@4/ie11CustomProperties.min.js"><\/script>');

/*!
 * light Mode Switch v1.0.1 (https://github.com/coliff/light-mode-switch)
 * Copyright 2021 C.Oliff
 * Licensed under MIT (https://github.com/coliff/light-mode-switch/blob/main/LICENSE)
 */
var lightSwitch=document.getElementById("lightSwitch");window.addEventListener("load",(function(){if(lightSwitch){initTheme();lightSwitch.addEventListener("change",(function(){resetTheme()}))}}));function initTheme(){var lightThemeSelected=localStorage.getItem("lightSwitch")!==null&&localStorage.getItem("lightSwitch")==="light";lightSwitch.checked=lightThemeSelected;lightThemeSelected?document.body.setAttribute("data-theme","light"):document.body.removeAttribute("data-theme")}function resetTheme(){if(lightSwitch.checked){document.body.setAttribute("data-theme","light");localStorage.setItem("lightSwitch","light")}else{document.body.removeAttribute("data-theme");localStorage.removeItem("lightSwitch")}}


  
/** DARKMODE  */

var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function () {
      resetTheme();
    });
  }
});

/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  var darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.removeAttribute("data-theme");
}

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  }
}

  <!-- IE 11 polyfill for CSS and Custom Properties -->

    nomodule>window.MSInputMethodContext && document.documentMode && document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-ie11@5/css/bootstrap-ie11.min.css"><script src="https://cdn.jsdelivr.net/npm/ie11-custom-properties@4/ie11CustomProperties.min.js"><\/script>');

/*!
 * Dark Mode Switch v1.0.1 (https://github.com/coliff/dark-mode-switch)
 * Copyright 2021 C.Oliff
 * Licensed under MIT (https://github.com/coliff/dark-mode-switch/blob/main/LICENSE)
 */
var darkSwitch=document.getElementById("darkSwitch");window.addEventListener("load",(function(){if(darkSwitch){initTheme();darkSwitch.addEventListener("change",(function(){resetTheme()}))}}));function initTheme(){var darkThemeSelected=localStorage.getItem("darkSwitch")!==null&&localStorage.getItem("darkSwitch")==="dark";darkSwitch.checked=darkThemeSelected;darkThemeSelected?document.body.setAttribute("data-theme","dark"):document.body.removeAttribute("data-theme")}function resetTheme(){if(darkSwitch.checked){document.body.setAttribute("data-theme","dark");localStorage.setItem("darkSwitch","dark")}else{document.body.removeAttribute("data-theme");localStorage.removeItem("darkSwitch")}}
