# Aetherius to Mundus - API

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![GitHub issues](https://img.shields.io/github/issues-raw/firebirdie-gaming/a2m-api?label=Open%20Issues) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/firebirdie-gaming/a2m-api?label=version)

Words to come...

## Features

- Coming Soon :tm:

> **Note**
> This is a note

## Roadmap

- Project Creation
- Project Running/Off-Ground

## Bird's Eye View

### ASCII File Tree

<details>
  <summary><i>Reveal Detailed Tree</i></summary>

```ascii
.
├── .dict/
│   ├── elder-scrolls.txt
│   └── firebirdie.txt
├── .ref
├── .vscode
├── src/
│   ├── data/
│   │   ├── {book-name}/
│   │   │   └── {#}e-{semver}/
│   │   │       ├── attributes.json
│   │   │       └── ...
│   │   └── README.md
│   └── index.ts
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .markdownlint.json
├── cspell.json
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── TODO.todo
└── tsconfig.json
```

</details>

- `.dict/` - Dictionary files formatted for [`cSpell` extension][cspell].
- `.ref/` - Reference files. Currently only used for [`Todo+` extension][todo].
- `.vscode/` - VSCode settings and Extension recommendations *(highly opinionated)*.
- `src/` - Source code for the project.
  - `data/` - Data files for the project. In the format of `{book-name}/{#}e-{semver}/{file}.json`.
    - [`README.md`][data-readme] - Explainer for the data files.
- **Config Files**: `.editorconfig`, `.eslintrc.cjs`, `.markdownlint.json`, `cspell.json`, `tsconfig.json`
- `TODO.todo` - A list of things to do for the project utilizing the format from the [`Todo+` extension][todo]. *(Read more about the organization of the `TODO` file [here][ref-todo-readme])*

## Authors

- [@ToggLeTek](https://www.github.com/ToggLeTek)

## Acknowledgements

- [Awesome Readme Templates][readme-templates] & [Awesome README][awesome-readme]: For the inspiration to create a better README.
- [5e-bits/5e-database][5e-bits]: For the inspiration to create programmatically available data for a new project.

## License

| Item | License |
|:----:|:-------:|
| Repo Code | ![MIT License](https://img.shields.io/github/license/firebirdie-gaming/a2m-api?label=License) |
| Data Files | ![ORC License](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FFirebirdie-Gaming%2Fa2m-api%2Falpha%2F.badge-info%2Forc.json) |

[readme-templates]: https://awesomeopensource.com/project/elangosundar/awesome-README-templates
[awesome-readme]: https://github.com/matiassingers/awesome-readme
[cspell]: https://github.com/streetsidesoftware/vscode-spell-checker
[todo]: https://github.com/fabiospampinato/vscode-todo-plus
[data-readme]: ./src/data/README.md
[ref-todo-readme]: ./.ref/README.md
[5e-bits]: https://github.com/5e-bits/
