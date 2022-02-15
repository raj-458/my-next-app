import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>Welcome to Next.js!</div>
      <br />
      <Link href="/blog">
        <a> Blog </a>
      </Link>
      <br />
      <br />
      <br />
      <Link href="/product">
        <h2><a> Products </a></h2>
      </Link>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          router.push({
            pathname: '/blog',
            query: { name: 'Someone' }
        })
        }}
      >
        Blog Button
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          router.push({
            pathname: '/comments',
        })
        }}
      >
        Comments
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          router.push({
            pathname: '/dataFetching/getStaticProps',
        })
        }}
      >
        Get Static Props
      </button>
    </div>
  );
}
