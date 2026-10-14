import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import path from 'path';
import { fileURLToPath } from 'url';

// В ESM-модуле __dirname не существует — восстанавливаем его
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    base: 'http://commerce-rerazin-vs.sfera.local/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        react(),
        tailwindcss(),
        federation({
            name: 'commerce-rerazin-vs',
            filename: 'remoteEntry.js',
            manifest: true,
            exposes: {
                './App': './src/App.tsx'
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^19.1.1',
                    strictVersion: false,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^19.1.1',
                    strictVersion: false,
                },
            },
        }),
    ],
    build: { target: 'esnext', minify: false },
    preview: {
        port: 5003,
        host: '0.0.0.0',
        strictPort: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
})