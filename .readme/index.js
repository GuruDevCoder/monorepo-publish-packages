const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  getCurrentPackages: async () => {
    const { stdout } = await exec('lerna list --long --no-private');

    const packages = stdout.split('\n')

    packages.pop()

    return packages.map(pac => {

      const pa = pac.split(/\s+/)

      return {
        name: pa[0],
        version: pa[1],
        path: pa[2]
      }

    })
  }

}
