import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://netflix-clone-backend-6dio.onrender.com",
    },
  },
  plugins: [react()],
});
