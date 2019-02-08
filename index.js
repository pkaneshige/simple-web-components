import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => {
  import('./src/swcApp.js');
});