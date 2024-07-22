import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// added aliases for ease of coding
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      icons: "/src/assets/icons",
      tailwind: "/src/tailwind",
      pages: "src/pages",
      lib: "/src/lib",
    },
  },
});
