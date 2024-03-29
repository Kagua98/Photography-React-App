import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//Import credentials from Sanity ('npm run dev')
export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);