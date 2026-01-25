import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: 'chong_portfolio_2026', // Replace 'your-repo-name' with your actual repository name
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  
  server: {
    host: "::",
    port: 8080,
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
}));
