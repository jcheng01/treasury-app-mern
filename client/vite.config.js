import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // using the "/api" prefix here
      "/api": {
        target: "http://localhost:5173", // Your backend address
        changeOrigin: true, // needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // You can add other proxies here if needed
    },
  },
});
