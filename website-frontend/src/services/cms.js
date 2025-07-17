import portfolioData from "../content";

const fetchBlogPosts = async () => {
  console.log("Fetching blog posts from CMS...");
  // Simulate a network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolioData.blogPosts);
    }, 500);
  });
};
export  {fetchBlogPosts};
