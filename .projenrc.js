const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
  name: 'cfn-resources',
  devDeps: ['prettier'],
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  bin: {
    'cfn-resources': 'lib/cli.js',
  },
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
});

project.synth();
