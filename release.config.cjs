module.exports = {
  branches: ['main', { name: 'alpha', prerelease: true }, { name: 'beta', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# Changelog'
      }
    ],
    [
      '@semantic-release/npm',
      {
        // Jenkins Artifactory Plugin must be used to publish npm packages.
        npmPublish: false
      }
    ],
    [
      '@semantic-release/git',
      {
        // Do not change.
        // Commit message is used to determine whether to publish a new release in the CI.
        message: 'chore(release): ${nextRelease.version} [skip ci]'
      }
    ]
  ]
};
