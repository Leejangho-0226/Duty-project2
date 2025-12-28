import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// ESM 환경에서 __dirname 만들기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // GitHub Pages 배포용 base 경로
  // 레포 이름: Duty-project2
  base: "/Duty-project2/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
