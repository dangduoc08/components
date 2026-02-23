import { spawn } from "node:child_process";

const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const color = (code) => (msg) => `\x1b[${code}m${msg}\x1b[0m`;
const green = color(32);
const red = color(31);

const runWithSpinner = (label, cmd, args = []) => {
  return new Promise((resolve, reject) => {
    let i = 0;

    const initialFrame = frames[i];
    process.stdout.write(`\r${green(`${initialFrame} ${label}`)}`);

    const spinner = setInterval(() => {
      i++;
      const frame = frames[i % frames.length];
      process.stdout.write(`\r${green(`${frame} ${label}`)}`);
    }, 80);

    const child = spawn(cmd, args, { shell: true });

    child.stderr.on("data", (data) => {
      process.stderr.write(data.toString());
    });

    child.on("exit", (code) => {
      clearInterval(spinner);
      if (code === 0) {
        process.stdout.write(`\r${green(`✅ ${label}\n`)}`);
        resolve();
      } else {
        process.stdout.write(`\r${red(`❌ ${label}\n`)}`);
        reject(new Error(`Failed to execute "${cmd} ${args.join(" ")}"`));
      }
    });
  });
};

const config = {
  "**/*.{ts,tsx,js,jsx,json,css}": (changedFiles) => [
    `biome check --write --unsafe ${changedFiles.join(" ")}`,
  ],
  "**/*.{ts,tsx}": async () => {
    try {
      await runWithSpinner("Stashing uncommitted changes", "git", [
        "stash",
        "-k",
        "-u",
      ]);
      await runWithSpinner("Type checking", "tsc", ["--noEmit"]);
    } finally {
      await runWithSpinner("Restoring local changes", "git", ["stash", "pop"]);
    }
    return [];
  },
};

export default config;
