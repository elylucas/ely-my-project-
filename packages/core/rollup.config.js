import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'dist/esm/index.js',
  output: {
    file: 'dist/index.js',
    format: 'commonjs',
    name: 'ionicEnterpriseAuthConnectExports',
    sourcemap: true,
    banner: '/*! Ely Test Project, dont use this */',
  },
  plugins: [sourcemaps(), commonjs(), resolve(), terser()],
};

