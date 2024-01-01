// @ts-check

/**
 * @type {import('@black-flag/core').Configuration['builder']}
 */
export const builder = function (yargs, _, argv) {
  yargs.parserConfiguration({ 'parse-numbers': false });

  if (argv && argv.lang) {
    return argv.lang === 'node'
      ? {
          lang: { choices: ['node'], demandOption: true },
          version: { choices: ['19.8', '20.9', '21.1'], default: '21.1' }
        }
      : {
          lang: { choices: ['python'], demandOption: true },
          version: {
            choices: ['3.10', '3.11', '3.12'],
            default: '3.12'
          }
        };
  } else {
    return {
      lang: { choices: ['node', 'python'], demandOption: true },
      version: { string: true, default: 'latest' }
    };
  }
};

/**
 * @type {import('@black-flag/core').Configuration<{ lang: string, version: string }>['handler']}
 */
export const handler = function ({ lang, version }) {
  console.log(`> Initializing new ${lang}@${version} project...`);
};
