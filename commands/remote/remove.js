// @ts-check

// See ./commands/remote/add.js for my preferred export syntax/style.

/**
 * @type {import('@black-flag/core').ChildConfiguration<{ name: string }>['command']}
 */
export const command = '$0 <name>';

/**
 * @type {import('@black-flag/core').ChildConfiguration<{ name: string }>['builder']}
 */
export const builder = function (blackFlag) {
  blackFlag.positional('name', {
    description: 'The name of the remote to permanently delete'
  });
};

/**
 * @type {import('@black-flag/core').ChildConfiguration<{ name: string }>['handler']}
 */
export const handler = function ({ name }) {
  console.log(`Deleted remote "${name}"`);
};
