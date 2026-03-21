import { useState, useEffect } from "react";
import { fetchBlogPosts } from "../services/cms";
import { Link } from "react-router-dom";
import portfolioData from "../content";

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
    <section id="blog" className="py-8">
      <div className="border-b border-zinc-200 pb-3 mb-8">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
          Research & Literature
        </h2>
      </div>

      {loading ? (
        <div className="text-zinc-500 italic text-base">Retrieving publications...</div>
      ) : (
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <article key={post._id} className="group flex justify-between gap-6 py-5 border-b border-zinc-100 items-start">
              <div className="flex-1 flex flex-col">
                <Link 
                  to={`/posts/${post.slug.current}`} 
                  className="text-lg font-bold text-zinc-900 group-hover:text-zinc-500 transition-colors leading-tight mb-2 flex items-center gap-3"
                >
                  {post.title}
                </Link>
                
                {post.excerpt && (
                  <p className="text-zinc-600 leading-relaxed line-clamp-2 mb-4 text-base">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-400 mt-auto">
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
              
              {post.imageUrl && (
                <Link to={`/posts/${post.slug.current}`} className="shrink-0 hidden sm:block">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-32 h-20 object-cover filter transition-all duration-300 border border-zinc-100"
                  />
                </Link>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
