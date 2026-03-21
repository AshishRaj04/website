import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client"; 
import { PortableText } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10">
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(800).fit('max').auto('format').url()}
            className="w-full border border-zinc-200"
          />
          {value.caption && (
            <figcaption className="text-center text-zinc-500 text-xs mt-3 font-sans">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <div className="my-8 rounded-sm border border-zinc-200 overflow-hidden text-sm">
        <SyntaxHighlighter 
          language={value.language || 'text'} 
          style={oneLight}
          customStyle={{ margin: 0, padding: '1.25rem', background: '#fafafa', fontSize: '13px' }}
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel} 
          className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold text-zinc-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded-sm text-[13px] font-mono border border-zinc-200">
        {children}
      </code>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-zinc-900 tracking-tight mt-12 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-zinc-900 tracking-tight mt-10 mb-4 border-b border-zinc-200 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-zinc-900 tracking-tight mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-semibold text-zinc-800 mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-zinc-700 leading-relaxed my-5 text-sm sm:text-base">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-zinc-300 pl-4 my-8 text-zinc-500 italic leading-relaxed text-sm sm:text-base">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 my-5 space-y-2 text-zinc-700 text-sm sm:text-base leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 my-5 space-y-2 text-zinc-700 text-sm sm:text-base leading-relaxed">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
};

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.fetch(POST_QUERY, { slug }).then((data) => setPost(data));
  }, [slug]);

  if (!post)
    return (
      <div className="py-12 text-zinc-500 italic text-sm">
        Retrieving manuscript...
      </div>
    );

  const postImageUrl = post.image ? urlFor(post.image).width(1200).url() : null;

  return (
    <article className="pt-6 pb-16 font-sans">
      <Link
        to="/blogs" 
        className="inline-flex items-center text-zinc-500 hover:text-zinc-900 text-xs font-semibold uppercase tracking-widest mb-10 transition-colors"
      >
        ← Index
      </Link>
      
      <header className="mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-5">
          {post.title}
        </h1>

        <div className="text-xs uppercase tracking-widest font-semibold text-zinc-400">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </time>
          {post.estimatedReadingTime && (
            <>
              <span className="mx-2">·</span>
              <span>{post.estimatedReadingTime} min read</span>
            </>
          )}
        </div>
      </header>

      {postImageUrl && (
        <div className="mb-12 border border-zinc-200">
          <img
            src={postImageUrl}
            alt={post.title || 'Cover image'}
            className="w-full h-auto"
          />
        </div>
      )}
      
      <div>
        {post.body && <PortableText value={post.body} components={ptComponents} />}
      </div>
    </article>
  );
}

