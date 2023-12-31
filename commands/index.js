/**
 * This little comment gives us intellisense support :)
 *
 * @type {import('@black-flag/core').RootConfiguration['builder']}
 */
export function builder(blackFlag) {
  return blackFlag.strict(false);
}

/**
 * @type {import('@black-flag/core').RootConfiguration['handler']}
 */
export function handler(argv) {
  console.log('ran root command handler');
}

/**
 * Note that `usage` is just a freeform string used in help text. The `command`
 * export, on the other hand, supports the yargs DSL for defining positional
 * parameters and the like.
 *
 * @type {import('@black-flag/core').RootConfiguration['usage']}
 */
export const usage = 'Usage: $0 command [options]\n\nCustom description here.';
