const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Stefan Freitag',
  authorAddress: 'stefan.freitag@udo.edu',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'aws_fsx_lifecycle_status_monitor',
  repositoryUrl: 'https://github.com/stefan.freitag/aws_fsx_lifecycle_status_monitor.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();