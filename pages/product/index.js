import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Product({ productId = 100 }) {
  return (
    <div>
      <br />
      <br />

      <h3>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h3>
      <h3>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h3>
      <h3>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h3>
      <h3>
        <Link
          href={{
            pathname: `/product/${productId}`,
            query: { q: "find-next-js" },
          }}
        >
          <a>Product {productId}</a>
        </Link>
      </h3>
    </div>
  );
}
