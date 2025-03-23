// @ts-check

import { $executionContext } from '@black-flag/core';

// See ./commands/remote/add.js for my preferred export syntax/style.

/**
 * @type {import('@black-flag/core').ChildConfiguration<{ name?: string }>}
 */
const configuration = {
  command: '$0 [name]',
  description: 'show details about a remote (or all remotes)',

  builder(blackFlag) {
    blackFlag.positional('name', {
      description: 'The name of the remote to show'
    });
  },

  handler({ name, [$executionContext]: context }) {
    if (name) {
      console.log(`Showing details about remote "${name}"`);
    } else {
      console.log(`Showing a list of all known remotes`);
    }

    console.log(
      `(saw special state from execution context: ${context.somethingSpecial})`
    );
  }
};

export default configuration;
