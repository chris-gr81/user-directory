import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://github.com/chris-gr81/user-directory
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/user-directory/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use "@/styles/variables.scss" as *;
            @use "@/styles/mixins.scss" as *;`,
      },
    },
  },
});
