// @ts-check

/**
 * This little comment gives us intellisense support :)
 *
 * Also note how we're using the `export const X = function(...) { ... }` syntax
 * instead of the streamlined `export function X(...) { ... }` syntax. Both of
 * these syntaxes are correct, however JSDoc does not support using "@type" on
 * the latter form for some reason.
 *
 * @type {import('@black-flag/core').Configuration['builder']}
 */
export const builder = function (blackFlag) {
  return blackFlag.strict(false);
};

/**
 * @type {import('@black-flag/core').RootConfiguration['handler']}
 */
export const handler = function (argv) {
  console.log('Ran root command handler');
};

/**
 * Note that `usage` is just a freeform string used in help text. The `command`
 * export, on the other hand, supports the yargs DSL for defining positional
 * parameters and the like.
 *
 * @type {import('@black-flag/core').RootConfiguration['usage']}
 */
export const usage = 'Usage: $0 command [options]\n\nCustom description here.';
