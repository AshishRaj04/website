import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client";
import { PortableText } from "@portabletext/react";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function PostPage() {
  const { slug } = useParams(); // 1. Get slug from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(POST_QUERY, { slug }) // 2. Pass slug as param to GROQ query
      .then((data) => setPost(data));
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  const postImageUrl = post.image
    ? urlFor(post.image).width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link to="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
