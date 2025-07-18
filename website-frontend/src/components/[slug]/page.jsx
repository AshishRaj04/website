import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client"; 
import { PortableText } from "@portabletext/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(800).fit('max').auto('format').url()}
          className="my-6 rounded-lg shadow-md"
        />
      );
    },
    code: ({ value }) => (
      <SyntaxHighlighter language={value.language || 'text'} style={materialDark}>
        {value.code}
      </SyntaxHighlighter>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-green-600 underline hover:text-green-800 transition-colors">
          {children}
        </a>
      );
    },
   
    strong: ({children}) => <strong className="font-bold text-gray-800">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
  },

  block: {
    h1: ({ children }) => <h1 className="text-4xl font-extrabold my-6 text-gray-800">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-5 text-gray-800">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4 text-gray-800">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-3 text-gray-800">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-600">{children}</blockquote>,
    normal: ({ children }) => <p className="text-lg leading-relaxed my-4 text-gray-700">{children}</p>,
  },

  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside my-6 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside my-6 space-y-2">{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li className="text-lg leading-relaxed text-gray-700">{children}</li>,
    number: ({ children }) => <li className="text-lg leading-relaxed text-gray-700">{children}</li>,
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
      <div className="min-h-screen flex items-center justify-center text-gray-700 font-sans">
        Loading...
      </div>
    );

  const postImageUrl = post.image
    ? urlFor(post.image).width(900).height(400).url()
    : null;

  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20 flex flex-col gap-8">
        <Link
          to="/blogs" 
          className="self-start px-5 py-2 rounded-full bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm"
        >
          <span className="text-lg">←</span> Back to Blog
        </Link>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center text-gray-500 text-base">
          <span>
            Published on{" "}
            <span className="text-green-600 font-semibold">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </span>
          </span>
        </div>

        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            className="rounded-xl shadow-lg w-full object-cover aspect-video"
            width="900"
            height="400"
          />
        )}
        
        <article 
          className="
            prose lg:prose-xl max-w-none
            prose-headings:font-bold prose-headings:text-gray-800
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-green-600 prose-a:transition-colors prose-a:hover:text-green-800
            prose-blockquote:border-green-500 prose-blockquote:text-gray-600
            prose-strong:text-gray-800
            prose-ul:list-disc prose-ol:list-decimal
          "
        >
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </article>
      </div>
    </main>
  );
}
