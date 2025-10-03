import { devLog } from "../utils/log";

export const navItems: {
  key: string;
  selector: string;
  defaultValue?: boolean;
}[] = [
  { key: "Grok", selector: "nav a[href='/i/grok']", defaultValue: true },
  { key: "Messages", selector: "nav a[href='/messages']", defaultValue: true },
  {
    key: "Communities",
    selector: "nav a[href$='/communities']",
    defaultValue: true,
  },
  { key: "List", selector: "nav a[href$='/lists']" },
  {
    key: "Bookmarks",
    selector: "nav a[href='/i/bookmarks']",
  },
  { key: "Premium", selector: "nav a[href^='/i/premium']", defaultValue: true },
  {
    key: "Organization",
    selector: "nav a[href^='/i/verified-orgs-signup']",
    defaultValue: true,
  },
];

export function applyVisibility() {
  devLog("applyVisibility");

  navItems.forEach((nav) => {
    const hidden = GM_getValue(nav.key, nav.defaultValue || false);

    const navEle = document.querySelector<HTMLLinkElement>(nav.selector);
    if (navEle) {
      navEle.style.display = hidden ? "none" : "inherit";
    }
  });
}
