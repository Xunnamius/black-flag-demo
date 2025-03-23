// @ts-check

// These @type comments give us intellisense support, but they're optional 🙂
// See ./commands/remote/add.js for my preferred export syntax/style.

/**
 * @type {Extract<import('@black-flag/core').Configuration['builder'],
 * Function>}
 */
export function builder(blackFlag) {
  return blackFlag.strict(false);
}

/**
 * @type {Extract<import('@black-flag/core').RootConfiguration['handler'],
 * Function>}
 */
export function handler(argv) {
  console.log('Ran root command handler');
}

/**
 * Note that `usage` is just a freeform string used in help text. The `command`
 * export, on the other hand, supports the Yargs DSL for defining positional
 * parameters and the like.
 *
 * @type {import('@black-flag/core').RootConfiguration['usage']}
 */
export const usage = 'Usage: $0 command [options]\n\nCustom description here.';
