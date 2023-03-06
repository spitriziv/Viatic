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




/*Cursor*/

class ArrowPointer {
  constructor() {
    this.root = document.body
    this.cursor = document.querySelector(".curzr")

    this.position = {
      distanceX: 0, 
      distanceY: 0,
      distance: 0,
      pointerX: 0,
      pointerY: 0,
    },
    this.previousPointerX = 0
    this.previousPointerY = 0
    this.angle = 0
    this.previousAngle = 0
    this.angleDisplace = 0
    this.degrees = 57.296
    this.cursorSize = 20

    this.cursorStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      top: '0px',
      left: `${ -this.cursorSize / 2 }px`,
      zIndex: '2147483647',
      width: `${ this.cursorSize }px`,
      height: `${ this.cursorSize }px`,
      transition: '250ms, transform 100ms',
      userSelect: 'none',
      pointerEvents: 'none'
    }

    this.init(this.cursor, this.cursorStyle)
  }

  init(el, style) {
    Object.assign(el.style, style)
    this.cursor.removeAttribute("hidden")
    
  }

  move(event) {
    this.previousPointerX = this.position.pointerX
    this.previousPointerY = this.position.pointerY
    this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x
    this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y
    this.position.distanceX = this.previousPointerX - this.position.pointerX
    this.position.distanceY = this.previousPointerY - this.position.pointerY
    this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2)
  
    this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`

    if (this.distance > 1) {
      this.rotate(this.position)
    } else {
      this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`
    }
  }

  rotate(position) {
    let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees
    let modAngle
    const style = this.cursor.style
    this.previousAngle = this.angle

    if (position.distanceX <= 0 && position.distanceY >= 0) {
      this.angle = 90 - unsortedAngle + 0
    } else if (position.distanceX < 0 && position.distanceY < 0) {
      this.angle = unsortedAngle + 90
    } else if (position.distanceX >= 0 && position.distanceY <= 0) {
      this.angle = 90 - unsortedAngle + 180
    } else if (position.distanceX > 0 && position.distanceY > 0) {
      this.angle = unsortedAngle + 270
    }

    if (isNaN(this.angle)) {
      this.angle = this.previousAngle
    } else {
      if (this.angle - this.previousAngle <= -270) {
        this.angleDisplace += 360 + this.angle - this.previousAngle
      } else if (this.angle - this.previousAngle >= 270) {
        this.angleDisplace += this.angle - this.previousAngle - 360
      } else {
        this.angleDisplace += this.angle - this.previousAngle
      }
    }
    style.transform += ` rotate(${this.angleDisplace}deg)`

    setTimeout(() => {
      modAngle = this.angleDisplace >= 0 ? this.angleDisplace % 360 : 360 + this.angleDisplace % 360
      if (modAngle >= 45 && modAngle < 135) {
        style.left = `${ -this.cursorSize }px`
        style.top = `${ -this.cursorSize / 2 }px`
      } else if (modAngle >= 135 && modAngle < 225) {
        style.left = `${ -this.cursorSize / 2 }px`
        style.top = `${ -this.cursorSize }px`
      } else if (modAngle >= 225 && modAngle < 315) {
        style.left = '0px'
        style.top = `${ -this.cursorSize / 2 }px`
      } else {
        style.left = `${ -this.cursorSize / 2 }px`
        style.top = '0px'
      }
    }, 0)
  }

  remove() {
    this.cursor.remove()
  }
}

(() => {
  const cursor = new ArrowPointer()
  if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {    
    document.onmousemove = function (event) {
      cursor.move(event)
    }
  } else {
    cursor.remove()
  }
})()

