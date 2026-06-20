import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  base: process.env.GITHUB_PAGES_BASE_PATH ?? "/",
  plugins: [tanstackStart(), react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
}));
