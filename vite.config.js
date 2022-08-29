import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '', // now we get relative paths instead of absolute paths
    build: {
        rollupOptions: {
            output: {
                plugins: [
                    obfuscatorPlugin({ compact: true })
                ]
            }
        }
    }
})