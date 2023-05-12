# Hello

```mmd

const packages = await scripts.getCurrentPackages()

return packages.map(item => `### [${item.name}](${item.path}) -  ${item.version}`).join('\n\n')
```
