import { useState, useEffect } from "react";
import { client } from "../sanity/client";

const TWEETS_QUERY = `*[_type == "tweet"]|order(publishedAt desc){
  _id,
  title,
  content,
  category,
  tags,
  publishedAt,
  link,
  "imageUrl": image.asset->url
}`;

const NoteCard = ({ tweet }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col gap-4 border border-zinc-200 p-5 bg-white hover:border-zinc-300 transition-colors break-inside-avoid">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start gap-3">
          <span className="font-bold text-zinc-900 text-base leading-tight">{tweet.title}</span>
          <time className="text-[11px] text-zinc-400 font-semibold tracking-wide uppercase shrink-0 pt-0.5">
            {new Date(tweet.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>

        {tweet.category && (
          <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
            {tweet.category}
          </span>
        )}
      </div>

      <div className="relative">
        <p className={`text-zinc-600 leading-relaxed whitespace-pre-wrap text-sm ${!expanded ? 'line-clamp-6' : ''}`}>
          {tweet.content}
        </p>
        {tweet.content && tweet.content.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 transition-colors mt-2 uppercase tracking-widest"
          >
            {expanded ? '← Collapse' : 'Read more →'}
          </button>
        )}
      </div>

      {tweet.imageUrl && (
        <div className="mt-1">
          <img
            src={tweet.imageUrl}
            alt="Note attachment"
            className="w-full h-auto border border-zinc-200 transition-all duration-300"
          />
        </div>
      )}

      {tweet.tags && tweet.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tweet.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest bg-zinc-50 px-1.5 py-0.5 border border-zinc-100">
              {tag}
            </span>
          ))}
        </div>
      )}

      {tweet.link && (
        <div className="mt-1 pt-3 border-t border-zinc-100">
          <a href={tweet.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest flex items-center gap-2">
            External Link ↗
          </a>
        </div>
      )}
    </article>
  );
};

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {tweets.map((tweet) => (
            <NoteCard key={tweet._id} tweet={tweet} />
          ))}
          {tweets.length === 0 && (
            <div className="col-span-full text-zinc-500 italic py-8 text-center text-base border border-dashed border-zinc-200">
              No notes published yet.
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Tweets;
