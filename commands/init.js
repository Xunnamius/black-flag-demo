// @ts-check

// See ./commands/remote/add.js for my preferred export syntax/style.

const PYTHON_DEFAULT_VERSION = '3.13';
const NODE_DEFAULT_VERSION = '23.3';

/**
 * @type {Extract<import('@black-flag/core').ChildConfiguration['builder'],
 * Function>}
 */
// "argv" is a new third argument for builders    vvv
export function builder(yargs, helpOrVersionSet, argv) {
  //                                              ^^^

  // Tell Yargs to leave strings that look like numbers as strings
  yargs.parserConfiguration({ 'parse-numbers': false });

  // This conditional branch will be used to validate any ✨ dynamic ✨
  // arguments and trigger the command's handler if validation succeeds.
  //
  // This is possible because Black Flag runs the builder function twice. First
  // WITHOUT the "argv" parameter, and then again WITH the "argv" parameter set
  // to the result from the first run. The recomputed "argv" result from the
  // second run is the one that gets passed to the handler function.
  //
  //   vvv
  if (argv) {
    // ^^^    "argv" is only defined on builder's SECOND run!
    if (argv.lang === 'node') {
      // NOTE THAT "argv" IS RECOMPUTED, so the old "argv" (the one we see now)
      // is discarded! Hence, we need to supply defaults for lang and version:
      return {
        lang: { choices: ['node'], default: 'node' },
        version: {
          choices: ['20.18', '22.12', '23.3'],
          default: NODE_DEFAULT_VERSION
        }
      };
    } else {
      // Also note above how we can return a literal options object instead of
      // calling yargs.options(...), but we still can if we want to:
      return yargs.options({
        lang: { choices: ['python'], default: 'python' },
        version: {
          choices: ['3.11', '3.12', '3.13'],
          default: PYTHON_DEFAULT_VERSION
        }
      });
    }
  }
  // This conditional branch will be used on builder's first run. It's used for
  // initial GENERIC validation and for generating GENERIC --help text.
  else {
    // These next lines are the best you'd be able to do when using vanilla
    // Yargs. But with Black Flag, it's only the generic fallback 🙂
    return {
      lang: { choices: ['node', 'python'], default: 'python' },
      version: { string: true, default: PYTHON_DEFAULT_VERSION }
    };
  }
}

/**
 * @type {Extract<import('@black-flag/core').ChildConfiguration<{ lang: string,
 * version: string }>['handler'], Function>}
 */
export function handler(argv) {
  console.log(`> initializing new ${argv.lang}@${argv.version} project...`);
  // ...
}
