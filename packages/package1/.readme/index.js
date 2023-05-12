const packageJson = require('../package.json')

module.exports = {
  getCurrentPackageName: () => packageJson.name
}
