// @ts-check

/**
 * @type {import('@black-flag/core').Configuration<{ name: string }>['handler']}
 */
export const handler = function ({ name, id }) {
  console.log(`Deleted remote "${name}"`);
};

/**
 * @type {import('@black-flag/core').Configuration<{ name: string }>['command']}
 */
export const command = '$0 <name>';

/**
 * @type {import('@black-flag/core').Configuration<{ name: string }>['builder']}
 */
export const builder = function (bf) {
  bf.positional('name', {
    description: 'The name of the remote to permanently delete'
  });
};
