# replace-lockfile-registry

[![npm](https://img.shields.io/npm/v/replace-lockfile-registry)](https://www.npmjs.com/package/replace-lockfile-registry)

[English](./README.md) | 简体中文

替换 `package-lock.json`、`yarn.lock` 和 `pnpm-lock.yaml` 的源。

## 使用

```shell
npx replace-lockfile-registry
```

默认会将 `package-lock.json`、`yarn.lock` 和 `pnpm-lock.yaml` 中的源替换为 `npm config get registry` 得到的源。如果需要指定源和替换的文件可以使用 `--registry` 和 `--lockfile` 选项。

## 选项

### `--registry`

指定 registry，例如：

- `npx replace-lockfile-registry --registry https://registry.npmjs.org/`。
- `npx replace-lockfile-registry --registry https://registry.npmmirror.com/`。

### `--lockfile`

指定锁文件，可以同时指定多个，例如：

- `npx replace-lockfile-registry --lockfile ./package-lock.json ./yarn.lock`。
