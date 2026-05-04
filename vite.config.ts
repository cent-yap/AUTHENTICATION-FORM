import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        createAccount: resolve(rootDir, "create-account.html"),
        forgotPassword: resolve(rootDir, "forgot-password.html"),
      },
    },
  },
});
