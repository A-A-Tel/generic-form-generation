import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    root: path.resolve(__dirname, "demo/"),
    plugins: [react()],
    resolve: {
        alias: {
            '@lib': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src'),
        },
    },
});
