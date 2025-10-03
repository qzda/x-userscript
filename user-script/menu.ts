import { devLog } from "../utils/log";
import { applyVisibility, navItems } from "./nav";

export const menuIds: number[] = [];

export function initMenu() {
  // 先清空旧菜单
  while (menuIds.length) {
    const id = menuIds.pop();
    if (id) {
      GM_unregisterMenuCommand(id);
    }
  }

  navItems.forEach((nav) => {
    const hidden = GM_getValue(nav.key, nav.defaultValue || false);
    const id = GM_registerMenuCommand(
      `${hidden ? "✅" : "❌"} Hidden ${nav.key}`,
      () => {
        GM_setValue(nav.key, !hidden);
        initMenu(); // 重新刷新菜单

        applyVisibility();
      },
      { autoClose: false }
    );
    menuIds.push(id);
  });

  devLog("initMenu");
}
