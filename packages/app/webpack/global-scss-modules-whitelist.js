/**
 * All source files matching paths declared within this module will be interpreted with global
 * names when being parsed by PostCSS.
 *
 * You should ensure that the global files which you declare your mixins etc in are specified here,
 * otherwise the names won't match by the time PostCSS encounters them and you will get "Undefined
 * mixin" errors in your code!
 */

module.exports = [
  /\/node_modules\//,               // <-- this is the default
  /\.scss$/,
];
