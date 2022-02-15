import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h3>Welcome to Blog Route (/blog) </h3>
      <br />
      <br />
      <h3>
        <Link href="/blog/first">
          <a style={{ color: 'blue'}}> FIRST BLOG PAGE </a>
        </Link>
      </h3>
      <h3>
        <Link href="/blog/second">
          <a style={{ color: 'red'}}> SECOND BLOG PAGE </a>
        </Link>
      </h3>
    </div>
  );
}
