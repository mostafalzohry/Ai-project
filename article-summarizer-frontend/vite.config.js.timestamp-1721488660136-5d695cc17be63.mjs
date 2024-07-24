// vite.config.js
import legacy from "file:///E:/Programming/iti/examples/Ai%20Task/AI-Summarizer/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import react from "file:///E:/Programming/iti/examples/Ai%20Task/AI-Summarizer/node_modules/@vitejs/plugin-react/dist/index.mjs";
import Path2 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { defineConfig } from "file:///E:/Programming/iti/examples/Ai%20Task/AI-Summarizer/node_modules/vite/dist/node/index.js";
import { ViteAliases } from "file:///E:/Programming/iti/examples/Ai%20Task/AI-Summarizer/node_modules/vite-aliases/dist/index.js";
import eslint from "file:///E:/Programming/iti/examples/Ai%20Task/AI-Summarizer/node_modules/vite-plugin-eslint/dist/index.mjs";

// src/pages/pages.config.js
import Path, { resolve } from "path";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///E:/Programming/iti/examples/Ai%20Task/AI-Summarizer/src/pages/pages.config.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = Path.dirname(__filename);
var pages = [{ name: "main", path: resolve(__dirname, "../index.html") }];
var pages_config_default = pages;

// vite.config.js
var __vite_injected_original_import_meta_url2 = "file:///E:/Programming/iti/examples/Ai%20Task/AI-Summarizer/vite.config.js";
var __filename2 = fileURLToPath2(__vite_injected_original_import_meta_url2);
var __dirname2 = Path2.dirname(__filename2);
var pagesInput = {};
pages_config_default.forEach((page) => {
  pagesInput[page.name] = page.path;
});
var vite_config_default = defineConfig({
  root: Path2.resolve(__dirname2, "./src"),
  publicDir: "../public",
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: Path2.resolve(__dirname2, "./build"),
    rollupOptions: {
      input: {
        ...pagesInput
      },
      output: {
        assetFileNames: (assetInfo) => {
          let info = assetInfo.name.split(".");
          let extType = info[info.length - 1];
          if (/svg|png|jpe?g|tiff|gif|webp|avif|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (/eot|otf|ttf|fnt|woff|woff2/.test(extType)) {
            extType = "fonts";
          } else if (/css/.test(extType)) {
            extType = "css";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js"
      }
    }
  },
  plugins: [
    react(),
    eslint(),
    ViteAliases(),
    legacy({
      targets: ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"]
    })
  ],
  css: {
    devSourcemap: true
  },
  server: {
    hmr: true,
    port: 3e3,
    host: "0.0.0.0"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3BhZ2VzL3BhZ2VzLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFByb2dyYW1taW5nXFxcXGl0aVxcXFxleGFtcGxlc1xcXFxBaSBUYXNrXFxcXEFJLVN1bW1hcml6ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFByb2dyYW1taW5nXFxcXGl0aVxcXFxleGFtcGxlc1xcXFxBaSBUYXNrXFxcXEFJLVN1bW1hcml6ZXJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1Byb2dyYW1taW5nL2l0aS9leGFtcGxlcy9BaSUyMFRhc2svQUktU3VtbWFyaXplci92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5JztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgVml0ZUFsaWFzZXMgfSBmcm9tICd2aXRlLWFsaWFzZXMnO1xyXG5pbXBvcnQgZXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XHJcbmltcG9ydCBwYWdlcyBmcm9tICcuL3NyYy9wYWdlcy9wYWdlcy5jb25maWcnO1xyXG5cclxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgX19kaXJuYW1lID0gUGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG5jb25zdCBwYWdlc0lucHV0ID0ge307XHJcbnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICBwYWdlc0lucHV0W3BhZ2UubmFtZV0gPSBwYWdlLnBhdGg7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByb290OiBQYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICBwdWJsaWNEaXI6ICcuLi9wdWJsaWMnLFxyXG4gIGJhc2U6ICcuLycsXHJcblxyXG4gIGJ1aWxkOiB7XHJcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgIG91dERpcjogUGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vYnVpbGQnKSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAuLi5wYWdlc0lucHV0LFxyXG4gICAgICB9LFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgbGV0IGluZm8gPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgbGV0IGV4dFR5cGUgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgaWYgKC9zdmd8cG5nfGpwZT9nfHRpZmZ8Z2lmfHdlYnB8YXZpZnxibXB8aWNvL2kudGVzdChleHRUeXBlKSkge1xyXG4gICAgICAgICAgICBleHRUeXBlID0gJ2ltYWdlcyc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKC9lb3R8b3RmfHR0ZnxmbnR8d29mZnx3b2ZmMi8udGVzdChleHRUeXBlKSkge1xyXG4gICAgICAgICAgICBleHRUeXBlID0gJ2ZvbnRzJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoL2Nzcy8udGVzdChleHRUeXBlKSkge1xyXG4gICAgICAgICAgICBleHRUeXBlID0gJ2Nzcyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy8ke2V4dFR5cGV9L1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBlc2xpbnQoKSxcclxuICAgIFZpdGVBbGlhc2VzKCksXHJcbiAgICBsZWdhY3koe1xyXG4gICAgICB0YXJnZXRzOiBbJz4gMC41JScsICdsYXN0IDIgdmVyc2lvbnMnLCAnRmlyZWZveCBFU1InLCAnbm90IGRlYWQnXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhtcjogdHJ1ZSxcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcUHJvZ3JhbW1pbmdcXFxcaXRpXFxcXGV4YW1wbGVzXFxcXEFpIFRhc2tcXFxcQUktU3VtbWFyaXplclxcXFxzcmNcXFxccGFnZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFByb2dyYW1taW5nXFxcXGl0aVxcXFxleGFtcGxlc1xcXFxBaSBUYXNrXFxcXEFJLVN1bW1hcml6ZXJcXFxcc3JjXFxcXHBhZ2VzXFxcXHBhZ2VzLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovUHJvZ3JhbW1pbmcvaXRpL2V4YW1wbGVzL0FpJTIwVGFzay9BSS1TdW1tYXJpemVyL3NyYy9wYWdlcy9wYWdlcy5jb25maWcuanNcIjtpbXBvcnQgUGF0aCwgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG5cclxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgX19kaXJuYW1lID0gUGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG5jb25zdCBwYWdlcyA9IFt7IG5hbWU6ICdtYWluJywgcGF0aDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9pbmRleC5odG1sJykgfV07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlcztcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixPQUFPLFlBQVk7QUFDdFcsT0FBTyxXQUFXO0FBQ2xCLE9BQU9BLFdBQVU7QUFDakIsU0FBUyxpQkFBQUMsc0JBQXFCO0FBQzlCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsbUJBQW1CO0FBQzVCLE9BQU8sWUFBWTs7O0FDTm9XLE9BQU8sUUFBUSxlQUFlO0FBQ3JaLFNBQVMscUJBQXFCO0FBRGdOLElBQU0sMkNBQTJDO0FBRy9SLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxLQUFLLFFBQVEsVUFBVTtBQUN6QyxJQUFNLFFBQVEsQ0FBQyxFQUFFLE1BQU0sUUFBUSxNQUFNLFFBQVEsV0FBVyxlQUFlLEVBQUUsQ0FBQztBQUUxRSxJQUFPLHVCQUFROzs7QURQc00sSUFBTUMsNENBQTJDO0FBU3RRLElBQU1DLGNBQWFDLGVBQWNGLHlDQUFlO0FBQ2hELElBQU1HLGFBQVlDLE1BQUssUUFBUUgsV0FBVTtBQUN6QyxJQUFNLGFBQWEsQ0FBQztBQUNwQixxQkFBTSxRQUFRLENBQUMsU0FBUztBQUN0QixhQUFXLEtBQUssSUFBSSxJQUFJLEtBQUs7QUFDL0IsQ0FBQztBQUVELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU1HLE1BQUssUUFBUUQsWUFBVyxPQUFPO0FBQUEsRUFDckMsV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsUUFBUUMsTUFBSyxRQUFRRCxZQUFXLFNBQVM7QUFBQSxJQUN6QyxlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxHQUFHO0FBQUEsTUFDTDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLE9BQU8sVUFBVSxLQUFLLE1BQU0sR0FBRztBQUNuQyxjQUFJLFVBQVUsS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUVsQyxjQUFJLDRDQUE0QyxLQUFLLE9BQU8sR0FBRztBQUM3RCxzQkFBVTtBQUFBLFVBQ1osV0FBVyw2QkFBNkIsS0FBSyxPQUFPLEdBQUc7QUFDckQsc0JBQVU7QUFBQSxVQUNaLFdBQVcsTUFBTSxLQUFLLE9BQU8sR0FBRztBQUM5QixzQkFBVTtBQUFBLFVBQ1o7QUFDQSxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxRQUVBLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxJQUNaLE9BQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxVQUFVLG1CQUFtQixlQUFlLFVBQVU7QUFBQSxJQUNsRSxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIlBhdGgiLCAiZmlsZVVSTFRvUGF0aCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgIl9fZmlsZW5hbWUiLCAiZmlsZVVSTFRvUGF0aCIsICJfX2Rpcm5hbWUiLCAiUGF0aCJdCn0K
