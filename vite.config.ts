import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: 'public',
    server:{
        port: 3456
    },
    plugins: [
        react(),
    ],
    resolve:{},
});
