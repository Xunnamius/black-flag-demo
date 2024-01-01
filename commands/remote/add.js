// @ts-check

/**
 * @type {import('@black-flag/core').Configuration<{ name: string, id: string }>['handler']}
 */
export const handler = function ({ name, id }) {
  console.log(`Added new remote "${name}": ${id}`);
};

/**
 * @type {import('@black-flag/core').Configuration<{ name: string, id: string }>['command']}
 */
export const command = '$0 <name> <id>';

/**
 * @type {import('@black-flag/core').Configuration<{ name: string, id: string }>['builder']}
 */
export const builder = function (bf) {
  bf.positional('name', {
    description: 'The name of the remote to add'
  }).positional('id', {
    description: 'The remote identifier'
  });
};
