# replace-lockfile-registry

[![npm](https://img.shields.io/npm/v/replace-lockfile-registry)](https://www.npmjs.com/package/replace-lockfile-registry)

English | [简体中文](./README.zh-CN.md)

Replace registry of `package-lock.json`, `yarn.lock` and `pnpm-lock.yaml`.

## Usage

```shell
npx replace-lockfile-registry
```

By default, the registry in `package-lock.json`, `yarn.lock` and `pnpm-lock.yaml` will be replaced with the registry get by `npm config get registry`. If you need to specify the registry and replaced files, you can use the `--registry` and `--lockfile` options.

## Options

### `--registry`

Specify registry, example:

- `npx replace-lockfile-registry --registry https://registry.npmjs.org/`。
- `npx replace-lockfile-registry --registry https://registry.npmmirror.com/`。

### `--lockfile`

Specify lockfiles, example:

- `npx replace-lockfile-registry --lockfile ./package-lock.json ./yarn.lock`。