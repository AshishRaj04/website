import { useState, useEffect } from "react";
import { client } from "../sanity/client";

const TWEETS_QUERY = `*[_type == "tweet"]|order(publishedAt desc){
  _id,
  content,
  author,
  publishedAt,
  link,
  "imageUrl": image.asset->url
}`;

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(TWEETS_QUERY).then((data) => {
      setTweets(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="tweets" className="py-8">
      <div className="border-b border-zinc-200 pb-3 mb-8">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
          Notes & Thoughts
        </h2>
      </div>

      {loading ? (
        <div className="text-zinc-500 italic text-base">Retrieving notes...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {tweets.map((tweet) => (
            <article key={tweet._id} className="flex flex-col gap-4 border border-zinc-200 p-6 bg-white hover:border-zinc-300 transition-colors">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-3">
                <span className="font-bold text-zinc-900 text-lg">{tweet.author || "Ashish Raj"}</span>
                <time className="text-xs text-zinc-500 font-semibold tracking-wide uppercase">
                  {new Date(tweet.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>

              <p className="text-zinc-700 leading-relaxed whitespace-pre-wrap text-base">
                {tweet.content}
              </p>

              {tweet.imageUrl && (
                <div className="mt-2">
                  <img
                    src={tweet.imageUrl}
                    alt="Note attachment"
                    className="w-full h-auto border border-zinc-200 filter transition-all duration-300"
                  />
                </div>
              )}

              {tweet.link && (
                <div className="mt-2 pt-3 border-t border-zinc-100">
                  <a href={tweet.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest flex items-center gap-2">
                    External Link ↗
                  </a>
                </div>
              )}
            </article>
          ))}
          {tweets.length === 0 && (
            <div className="col-span-1 sm:col-span-2 text-zinc-500 italic py-8 text-center text-base border border-dashed border-zinc-200">
              No notes published yet.
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Tweets;
