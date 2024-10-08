import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/saas-duplicate/', 
  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.png",
    "**/*.svg",
    "**/*.heic",
    "**/*.HEIC",
  ],
  plugins: [react()],
});
