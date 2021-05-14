module.exports = {
    client: {
      service: {
        name: 'github',
        // URL to the GraphQL API
        url: 'https://api.github.com/graphql'
      },
      // Files processed by the extension
      includes: [
        'ClientApp/**/*.vue',
        'ClientApp/**/*.ts',
      ],
    },
  }