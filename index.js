import N from "@nut-tree/nut-js";
import Neurosity from "@neurosity/notion";
import { email, password } from "./auth.js";

const mind = new Neurosity.Notion();

// 🔒 Privacy is important
await mind.login({ email, password });

// 🧠 Observable of mental commands
mind.kinesis("disappear").subscribe(() => {
  closeAllOtherTabs();
});

// 🤖 Execute keyboard shortcut via Nut.js
function closeAllOtherTabs() {
  N.keyboard.type(N.Key.LeftShift, N.Key.LeftAlt, N.Key.O);
}
