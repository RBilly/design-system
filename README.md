# design-system

> Component library for the Design System

## Local development

This project uses [pnpm](https://pnpm.io/) package manager. 
To setup your environment make sure you have [nvm-windows](https://github.com/coreybutler/nvm-windows#readme) or [nvm-sh](https://github.com/nvm-sh/nvm#readme) installed.
And that's it.
Run the following instructions:

With nvm-sh on linux or wsl:
```shell
# use the project Node version
nvm use
```

With nvm-windows on windows:
```shell
# use the project Node version
nvm use $(Get-Content .nvmrc)
```
If `node vX is not installed` run:
```shell
nvm install $(Get-Content .nvmrc)
nvm use newest
```
Once node is setup, run the following:
```shell
# Enable corepack to let it identify and install the required package manager version
corepack enable

# install dependencies
pnpm install

# start the Storybook local web server
pnpm dev
```

## Contributing

### Conventional commits

This repository uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Each commit messages must be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

# Version management

## Project release

This project is using [semantic-release](https://github.com/semantic-release/semantic-release) to generate the changelog and bump the version automatically based on the git history.
To create a release follow the [How to release](./docs/how-to-release.md) documentation.

## Dependency update

Update of dependencies should be done as often as possible.
```shell
# Updates all dependencies, adhering to ranges specified in package.json
pnpm update
```
For a major update of a specific dependency, outside ranges allowed in `package.json`, it should be done preferably in a dedicated task with careful testing.

## Tool update

### node

To update the version of `node` used by the project, change it in the `.nvmrc` file. \
**Careful! CI build on Jenkins does not use `nvm` tool. \
Make sure that jenkins provide the version of `node` you intend to use and update the `jenkinsfile` to change the version of `tools { nodejs "nodejs-X.X.X" }`. \
If Jenkins does not support your required version of `node`, please open a ticket to the `ISS Desktop Service`.**

### pnpm

To update the version of `pnpm` that the project should be using, please run the following command:
```shell
# Replace <version> by * for latest, 9 for latest version 9, or 9.0.2 to fix a specific version 
corepack use pnpm@<version>
```
This command will also update the `packageManager` field in the `package.json` file. Allowing other contributors to be aligned. 

### Documentation
Refer to the following links to learn more about the way of working in this repository:
- [Component development guidelines](./docs/component-development-guidelines.md)
- [How to add icons](./docs/how-to-add-icons.md)
- [How to build design tokens](./docs/how-to-build-design-tokens.md)
- [How to release](./docs/how-to-release.md)
