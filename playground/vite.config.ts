import uni from '@uni-helper/plugin-uni'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    UnoCSS(),
  ],
})
