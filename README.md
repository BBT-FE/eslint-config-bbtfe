# eslint-config-bbtfe
Eslint plugin for BBT-FE developer.

## Usage

### 标准规则（eslint-config-bbtfe）

默认包含所有eslint规则

安装

```
npm install eslint-config-bbtfe eslint
```

创建 ".eslintrc.json", 将下面配置复制到文件创建的配置文件中

```
{
  "extends": [ "eslint-config-bbtfe" ], // 如果是字符串，则直接写bbtfe(必须删除注释)
  "globals": {
  },
  "rules": {
    // 项目自定义配置
  }
}
```

### React规则（eslint-config-bbtfe/react）

安装

```
npm install --save-dev eslint-config-bbtfe eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
```

创建 ".eslintrc.json", 将下面配置复制到文件创建的配置文件中

```
{
  "extends": "bbtfe/react",
  "globals": {
  },
  "rules": {
    // 项目自定义配置
  }
}
```

## LICENCE

MIT

## Reference

- [ESLint Code Guide](https://eslint.org/docs/user-guide/configuring)
- [ESLint Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs)

## TODO:
- [ ] 优化配置(暂时不够完美)
