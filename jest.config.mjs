// @ts-check
'use strict';

import { deepMergeConfig } from '@-xun/symbiote/assets';
import { assertEnvironment, moduleExport } from '@-xun/symbiote/assets/jest.config.mjs';
import { createDebugLogger } from 'rejoinder';

const debug = createDebugLogger({ namespace: 'symbiote:config:jest' });

const config = deepMergeConfig(
  moduleExport({ derivedAliases: getJestAliases(), ...assertEnvironment() }),
  {
    // Any custom configs here will be deep merged with moduleExport's result
    testMatch: ['**/test.cjs']
  }
);

delete config.setupFilesAfterEnv;

export default config;

debug('exported config: %O', config);

function getJestAliases() {
  return {};
}
