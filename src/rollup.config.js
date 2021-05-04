import typescript from '@rollup/plugin-typescript'
import flatDts from 'rollup-plugin-flat-dts'
import { terser } from 'rollup-plugin-terser'

/**
 * @see https://rollupjs.org/guide/en/#big-list-of-options
 * @see https://github.com/run-z/rollup-plugin-flat-dts
 * @see https://github.com/terser/terser
 */
export default {
  input: './index.ts',
  output: {
    file: './dist/index.js',
    format: 'es'
  },
  external: [
    '@nativescript-core',
    '@nativescript/core/ui',
    '@nativescript-community/ui-material-core'
  ],
  plugins: [
    typescript(),
    flatDts(),
    terser({
      ecma: '2017'
    })
  ]
}
