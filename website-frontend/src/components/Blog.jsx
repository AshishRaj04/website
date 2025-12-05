import { useState, useEffect } from "react";
import { fetchBlogPosts } from "../services/cms";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="blog" className="py-24 bg-white font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">
            Latest Updates
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            From the Blog
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Insights and thoughts on software engineering, AI, and continuous learning.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post) => (
              <motion.article
                key={post._id}
                variants={item}
                className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden group h-full"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {post.imageUrl ? (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                      <span className="text-green-200 text-4xl font-bold opacity-50">Blog</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs font-medium text-gray-500 mb-4 space-x-3 uppercase tracking-wider">
                    <span className="flex items-center text-green-600">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {new Date(post.publishedAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  <a href={`/posts/${post.slug.current}`} className="block group-hover:text-green-600 transition-colors mb-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                    {post.excerpt ||
                      post.body?.[0]?.children?.[0]?.text ||
                      "Explore this article to learn more."}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">
                       Read Article
                    </span>
                    <a
                      href={`/posts/${post.slug.current}`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all transform duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
