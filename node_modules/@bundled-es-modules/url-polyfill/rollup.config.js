import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/url-polyfill/url-polyfill.js',
    output: {
      file: './url-polyfill.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];
