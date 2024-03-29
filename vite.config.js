import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://blinks-test.onrender.com",
        changeOrigin: true,
      },
    },
    port: 3000,
  },
  plugins: [react()],
});
