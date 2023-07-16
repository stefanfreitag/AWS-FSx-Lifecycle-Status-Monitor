const { awscdk } = require('projen');
const { Stability } = require('projen/lib/cdk');
const { UpgradeDependenciesSchedule } = require('projen/lib/javascript');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Stefan Freitag',
  authorAddress: 'stefan.freitag@udo.edu',
  cdkVersion: '2.87.0',
  defaultReleaseBranch: 'main',
  name: 'aws_fsx_lifecycle_status_monitor',
  repositoryUrl: 'https://github.com/stefan.freitag/aws_fsx_lifecycle_status_monitor.git',
  keywords: ['aws', 'fsx', 'lifecycle', 'monitor'],
  tsconfigDev: {
    compilerOptions: {
      ignoreDeprecations: '5.0',
    },
  },
  tsconfig: {
    compilerOptions: {
      ignoreDeprecations: '5.0',
    },
  },
  devDeps: [
    '@aws-cdk/integ-tests-alpha@2.87.0-alpha.0',
    '@aws-cdk/integ-runner@2.87.0-alpha.0',
    'ts-node',
  ],
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.MONTHLY,
    },
  },
  stability: Stability.EXPERIMENTAL,
});

const commonExcludes = ['.history/', '.venv', '.idea'];
project.gitignore.addPatterns(...commonExcludes);
project.npmignore.addPatterns(...commonExcludes);

project.synth();

