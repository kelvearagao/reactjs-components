## Creating a package

```
lerna create button
```

## Install and link all dependencies

```
yarn bootstrap
```

## Running the storybook

```
yarn dev
```

## Advantages

* The main reason for the Monorepo structure is to support multiple packages. This allows us to have a single lint, build, test, and release process for all packages.

## Links

* https://stackoverflow.com/questions/40795836/how-do-you-use-the-files-and-directories-properties-in-package-json
* https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d