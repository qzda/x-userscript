import { devLog } from "../utils/log";

export const menuIds: number[] = [];
export const navItems = [
  { key: "Grok", selector: "nav a[href='/i/grok']" },
  { key: "Messages", selector: "nav a[href='/messages']" },
  { key: "Communities", selector: "nav a[href$='/communities']" },
] as const;

export function initMenuCommand() {
  // 先清空旧菜单
  while (menuIds.length) {
    const id = menuIds.pop();
    if (id) {
      GM_unregisterMenuCommand(id);
    }
  }

  navItems.forEach((nav) => {
    const hidden = GM_getValue(nav.key, true);
    const id = GM_registerMenuCommand(
      `${hidden ? "✅" : "❌"} Hidden ${nav.key}`,
      () => {
        GM_setValue(nav.key, !hidden);
        initMenuCommand(); // 重新刷新菜单

        const navEle = document.querySelector<HTMLLinkElement>(nav.selector);
        if (navEle) {
          navEle.style.display = !hidden ? "none" : "inherit";
        }
      },
      { autoClose: false }
    );
    menuIds.push(id);

    const navEle = document.querySelector<HTMLLinkElement>(nav.selector);
    if (navEle) {
      navEle.style.display = hidden ? "none" : "inherit";
    }
  });

  devLog("initMenuCommand");
}
