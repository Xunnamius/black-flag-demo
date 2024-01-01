// @ts-check

import { $executionContext } from '@black-flag/core';

// For pure JS ESM projects, I prefer the following syntax for my command files
// instead of using individual exports like in the previous examples:

/**
 * @type {import('@black-flag/core').ImportedConfigurationModule<{ name?: string }>}
 */
const configuration = {
  command: '$0 [name]',
  description: 'show details about a remote (or all remotes)',

  handler({ name, [$executionContext]: context }) {
    if (name) {
      console.log(`Showing details about remote "${name}"`);
    } else {
      console.log(`Showing a list of all known remotes`);
    }

    console.log(
      `(saw special state from execution context: ${context.somethingSpecial})`
    );
  },

  builder(bf) {
    bf.positional('name', {
      description: 'The name of the remote to show'
    });
  }
};

export default configuration;
