// import portfolioData from "../content";

// const fetchBlogPosts = async () => {
//   console.log("Fetching blog posts from CMS...");
//   // Simulate a network request
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(portfolioData.blogPosts);
//     }, 500);
//   });
// };
// export  {fetchBlogPosts};


import { client } from "../sanity/client";

const BLOG_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, image}`;

const fetchBlogPosts = async () => {
  return await client.fetch(BLOG_POSTS_QUERY);
};

export { fetchBlogPosts };