import { name, description, version } from "./package.json";

const icon =
  "https://raw.githubusercontent.com/qzda/x-userscript/main/image/logo.svg";

const userScriptUrl =
  "https://raw.githubusercontent.com/qzda/x-userscript/main/dist/x-userscript.user.js";

type configValue = string | number;

export const UserScriptConfig: Record<string, configValue | configValue[]> = {
  name,
  description,
  author: "qzda",
  version,
  match: "https://x.com/*",
  namespace: "https://github.com/qzda/x-userscript/",
  supportURL: "https://github.com/qzda/x-userscript/issues/new",
  downloadURL: userScriptUrl,
  updateURL: userScriptUrl,
  icon,
  copyright: "MIT",
  "run-at": "document-end",
  connect: ["raw.githubusercontent.com", "github.com"],
  grant: [
    "GM_registerMenuCommand",
    "GM_unregisterMenuCommand",
    "GM_getValue",
    "GM_setValue",
    "GM_addStyle",
    "GM_addElement",
  ],
};
