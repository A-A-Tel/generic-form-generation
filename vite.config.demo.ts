import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    root: 'demo',
    resolve: {
        alias: {
            // Demo imports the local library source
            'generic-form-generation': path.resolve(__dirname, 'src'),
        },
    },
});
