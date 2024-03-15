import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      BASE_URL: process.env.BASE_URL,
      API_URL_V1: process.env.API_URL_V1,
      GRAPHHOPPER_URL: process.env.GRAPHHOPPER_URL,
      SITE_NAME: process.env.SITE_NAME,
      FAST_API: process.env.FAST_API,
      PROJECT: process.env.PROJECT,
      RASTER_TILE_URL: process.env.RASTER_TILE_URL,
    },
  },
});
