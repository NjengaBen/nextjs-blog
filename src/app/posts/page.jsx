import Link from "next/link";
import Head from "next/head";

// `app/page.js` is the UI for the root `/` URL
const posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div>
        <Link
          className="font-bold text-blue-800 hover:text-blue-300"
          href="posts/{1}"
        >
          My first post
        </Link>
      </div>
    </>
  );
};

export default posts;
