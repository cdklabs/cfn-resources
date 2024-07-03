import { typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  name: 'cfn-resources',
  projenrcTs: true,
  devDeps: ['prettier'],
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  bin: {
    'cfn-resources': 'lib/cli.js',
  },
  repository: 'https://github.com/cdklabs/cfn-resources',
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
});

project.synth();
