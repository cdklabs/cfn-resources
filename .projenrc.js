const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
  name: 'cfn-resources',
  devDeps: ['prettier'],
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  bin: {
    'cfn-resources': 'lib/cli.js',
  },
});

project.synth();
