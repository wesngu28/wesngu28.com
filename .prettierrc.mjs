// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  arrowParens: 'avoid',
  singleQuote: true,
  printWidth: 120,
  semi: false,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro'],
}
