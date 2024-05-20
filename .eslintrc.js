module.exports = {
  root: true,
  extends: ['@xotoboil-monorepo-lerna'],
  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
      },
    },
  ],
}
