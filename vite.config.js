import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
   plugins: [pugPlugin(options, locals, { hello: "world", baseUrl: "/" })],
   base: "./",
   build: {
      rollupOptions: {
         outDir: 'dist',
         assetsDir: 'src/assets',
         minify: true,
         sourcemap: false,
         input: {
            input: 'src/main.ts',
         },
         output: {
            format: 'es',
            entryFileNames: '[name].[hash].js',
            chunkFileNames: '[name].[hash].js',
            assetFileNames: '[name].[hash].[ext]',
          },
      }
   },
})
