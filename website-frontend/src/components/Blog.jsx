import { useState, useEffect } from "react";
import { fetchBlogPosts } from "../services/cms";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <section id="blog" className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          From the Blog
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          My thoughts on AI, machine learning, and software engineering.
        </p>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
          {loading ? (
            <p className="text-center col-span-2">Loading posts...</p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    <a
                      href={`/posts/${post.slug.current}`}
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-600">
                        {post.excerpt ||
                          post.body?.[0]?.children?.[0]?.text ||
                          "No excerpt available."}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href={`/posts/${post.slug.current}`}
                      className="text-base font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      Read full story
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
