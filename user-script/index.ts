"use strict";
import { log } from "../utils/log";
import { initMenu } from "./menu";
import { applyVisibility } from "./nav";

log();
initMenu();

const navInterval = setInterval(() => {
  if (document.querySelector("nav")) {
    clearInterval(navInterval);
    applyVisibility();
  }
}, 200);

window.addEventListener("click", () => {
  const navInterval = setInterval(() => {
    if (document.querySelector("nav")) {
      clearInterval(navInterval);
      applyVisibility();
    }
  }, 200);
});
