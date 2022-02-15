import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href="/">
        <h3 style={{ color: "Blue" }}>
          <a>Home</a>
        </h3>
      </Link>
      <br />
      <br />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
