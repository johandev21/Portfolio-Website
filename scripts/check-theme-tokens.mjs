import { readFile } from "node:fs/promises";

const tokens = await readFile(new URL("../src/styles/tokens.css", import.meta.url), "utf8");

const assertions = [
  [!/#(?:[\da-f]{3,8})\b/i.test(tokens), "tokens.css must not contain hex colors"],
  [tokens.includes("light-dark("), "semantic tokens must define light/dark values"],
  [tokens.includes("--project-card-border: var(--color-border)"), "project-card border must inherit the shared border token"],
  [tokens.includes(':root[data-theme="light"]'), "light theme override is missing"],
  [tokens.includes(':root[data-theme="dark"]'), "dark theme override is missing"],
];

const failures = assertions.filter(([passed]) => !passed).map(([, message]) => message);

if (failures.length > 0) {
  console.error(failures.map((message) => `Theme token check failed: ${message}`).join("\n"));
  process.exit(1);
}

console.log("Theme token check passed");
