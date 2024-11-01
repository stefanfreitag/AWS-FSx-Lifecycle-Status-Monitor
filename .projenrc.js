const { awscdk } = require('projen');
const { Stability } = require('projen/lib/cdk');
const { UpgradeDependenciesSchedule } = require('projen/lib/javascript');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Stefan Freitag',
  authorAddress: 'stefan.freitag@udo.edu',
  authorOrganization: false,
  homepage: 'https://stefanfreitag.github.io/AWS-FSx-Lifecycle-Status-Monitor',
  cdkVersion: '2.165.0',
  defaultReleaseBranch: 'main',
  name: 'aws-fsx-lifecycle-status-monitor',
  repositoryUrl: 'https://github.com/stefanfreitag/AWS-FSx-Lifecycle-Status-Monitor',
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
    '@aws-cdk/integ-tests-alpha@2.165.0-alpha.0',
    '@aws-cdk/integ-runner@2.165.0-alpha.0',
    'ts-node',
  ],
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: UpgradeDependenciesSchedule.MONTHLY,
    },
  },
  stability: Stability.EXPERIMENTAL,
  stale: true,
  staleOptions: {
    issues: {
      close: true,
    },
    pullRequests: {
      close: true,
    },
  },
  publishToPypi: {
    module: 'aws_fsx_lifecycle_status_monitor',
    distName: 'aws-fsx-lifecycle-status-monitor',
  },
});

const commonExcludes = ['.history/', '.venv', '.idea'];
project.gitignore.addPatterns(...commonExcludes);
project.npmignore.addPatterns(...commonExcludes);

project.synth();

