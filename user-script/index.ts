"use strict";
import { log } from "../utils/log";
import { initMenuCommand } from "./initMenuCommand";

log();
initMenuCommand();

const observer = new MutationObserver(() => {
  const nav = document.querySelector("nav");
  if (nav) {
    initMenuCommand();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
