import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'dist/esm/index.js',
  external: ['@ely-my-project/core'],
  output: {
    file: 'dist/index.js',
    format: 'es',
    name: 'ionicEnterpriseAuthConnectExports',
    sourcemap: true,
    banner: '/*! Ely Test Project, dont use this */',
  },
  plugins: [resolve(), terser()],
};

