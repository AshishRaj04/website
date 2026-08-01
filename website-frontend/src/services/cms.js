import { client } from "../sanity/client";

const BLOG_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt, 
  body, 
  excerpt,
  "imageUrl": image.asset->url
}`;

const fetchBlogPosts = async () => {
  return await client.fetch(BLOG_POSTS_QUERY);
};

export { fetchBlogPosts };