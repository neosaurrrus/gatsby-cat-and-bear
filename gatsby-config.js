import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `The Cat and Bear Restaurant`,
    siteUrl: `https://the-cat-and-bear.com`,
    description: 'Purrfect Food. Roarsome ambiance',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `f95cyo0y`,
        dataset: `production`,
        watchMode: true, // Allows changes to be reflected in Realtime for development
        token: process.env.SANITY_TOKEN, // DO NOT put you token in here. We need to keep our token secret. So we stick it into a .env file. See below...
      },
    },
  ],
};
