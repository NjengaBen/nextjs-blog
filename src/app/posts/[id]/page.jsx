import Link from "next/link";

const post1 = () => {
  return (
    <div>
      <h1>Heading</h1>
      <p>Welcome to my first post</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
        obcaecati.
      </p>
      <div>
        <Link
          className="font-bold text-blue-800 hover:text-blue-300"
          href="/posts"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default post1;
