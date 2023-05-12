# Hello

```mmd

const package = await scripts.getCurrentPackageName()

return packages.map(item => `### [${item.name}](${item.path}) -  ${item.version}`).join('\n\n')
```
