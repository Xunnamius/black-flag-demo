<p align="center" width="100%">
  <img width="300" src="./black-flag.png">
</p>

<p align="center" width="100%">
  <code>$ npx -p @black-flag/demo myctl --help</code>
</p>

<hr />

<!-- badges-start -->

<div align="center">

[![Black Lives Matter!][x-badge-blm-image]][x-badge-blm-link]
[![Last commit timestamp][x-badge-lastcommit-image]][x-badge-repo-link]
[![Codecov][x-badge-codecov-image]][x-badge-codecov-link]
[![Source license][x-badge-license-image]][x-badge-license-link]
[![Uses Semantic Release!][x-badge-semanticrelease-image]][x-badge-semanticrelease-link]

</div>

<!-- badges-end -->

<br />

# Black Flag CLI Demo

[Black Flag][1] is a yargs-based library for creating deeply hierarchical CLI
tools declaratively and simply.

This repository corresponds to the [usage tutorial featured in the Black Flag
documentation][2].

If you want a more advanced example of a CLI written with Black Flag but with
[debug](https://npm.im/debug)-based custom error handling and
[listr2](https://npm.im/listr2) + [inquirer](https://npm.im/inquirer) output
support, check out
[xunnctl](https://github.com/Xunnamius/xunnctl/blob/main/src/configure.ts);

## Usage

> For a more in-depth look, see [the tutorial][2] corresponding to this demo
> repository.

You don't need to install this demo to use it. You can invoke it directly:

```shell
npx -p @black-flag/demo myctl init --lang 'node' --version=21.1
```

And see pretty debug text like so:

```shell
DEBUG='*' npx -p @black-flag/demo myctl init --lang 'node' --version=21.1
```

If you do want to install the CLI for some reason, you should install it
globally:

```shell
npm install -g @black-flag/demo
```

Either way, you can use the `--help` option to determine what the demo CLI can
do:

```shell
npx -p @black-flag/demo myctl --help
```

## Appendix 🏴

### License

See [LICENSE][x-repo-license].

## Contributing and Support

**[New issues][x-repo-choose-new-issue] and [pull requests][x-repo-pr-compare]
are always welcome and greatly appreciated! 🤩** Just as well, you can [star 🌟
this project][x-badge-repo-link] to let me know you found it useful! ✊🏿 Or you
could [buy me a beer][x-repo-sponsor] 🥺 Thank you!

See [CONTRIBUTING.md][x-repo-contributing] and [SUPPORT.md][x-repo-support] for
more information.

### Contributors

<!-- remark-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- remark-ignore-end -->

Thanks goes to these wonderful people ([emoji
key][x-repo-all-contributors-emojis]):

<!-- remark-ignore-start -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://xunn.io/"><img src="https://avatars.githubusercontent.com/u/656017?v=4?s=100" width="100px;" alt="Bernard"/><br /><sub><b>Bernard</b></sub></a><br /><a href="#infra-Xunnamius" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Xunnamius/black-flag-demo/commits?author=Xunnamius" title="Code">💻</a> <a href="https://github.com/Xunnamius/black-flag-demo/commits?author=Xunnamius" title="Documentation">📖</a> <a href="#maintenance-Xunnamius" title="Maintenance">🚧</a> <a href="https://github.com/Xunnamius/black-flag-demo/commits?author=Xunnamius" title="Tests">⚠️</a> <a href="https://github.com/Xunnamius/black-flag-demo/pulls?q=is%3Apr+reviewed-by%3AXunnamius" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- remark-ignore-end -->

This project follows the [all-contributors][x-repo-all-contributors]
specification. Contributions of any kind welcome!

[x-badge-blm-image]: https://xunn.at/badge-blm 'Join the movement!'
[x-badge-blm-link]: https://xunn.at/donate-blm
[x-badge-codecov-image]:
  https://img.shields.io/codecov/c/github/Xunnamius/black-flag-demo/main?style=flat-square&token=HWRIOBAAPW
  'Is this package well-tested?'
[x-badge-codecov-link]: https://codecov.io/gh/Xunnamius/black-flag-demo
[x-badge-lastcommit-image]:
  https://img.shields.io/github/last-commit/xunnamius/black-flag-demo?style=flat-square
  'Latest commit timestamp'
[x-badge-license-image]:
  https://img.shields.io/npm/l/@black-flag/demo?style=flat-square
  "This package's source license"
[x-badge-license-link]:
  https://github.com/Xunnamius/black-flag-demo/blob/main/LICENSE
[x-badge-repo-link]: https://github.com/xunnamius/black-flag-demo
[x-badge-semanticrelease-image]:
  https://xunn.at/badge-semantic-release
  'This repo practices continuous integration and deployment!'
[x-badge-semanticrelease-link]:
  https://github.com/semantic-release/semantic-release
[x-repo-all-contributors]: https://github.com/all-contributors/all-contributors
[x-repo-all-contributors-emojis]: https://allcontributors.org/docs/en/emoji-key
[x-repo-choose-new-issue]:
  https://github.com/xunnamius/black-flag-demo/issues/new/choose
[x-repo-contributing]: /CONTRIBUTING.md
[x-repo-license]: ./LICENSE
[x-repo-pr-compare]: https://github.com/xunnamius/black-flag-demo/compare
[x-repo-sponsor]: https://github.com/sponsors/Xunnamius
[x-repo-support]: /.github/SUPPORT.md
[1]: https://github.com/Xunnamius/black-flag
[2]: https://github.com/Xunnamius/black-flag#usage
