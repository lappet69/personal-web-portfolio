import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: "", // or leave blank for unauthenticated usage
  useCdn: false, // `true` or `false` if you want to ensure fresh data
});
