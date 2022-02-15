import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductId() {
  const router = useRouter();
  const { productId, q = "" } = router.query;
  return (
    <div>
      <h3>Welcome to ProductId "{productId}" Route (/product/:productId): </h3>
      {q && <h3 style={{ color: "blue" }}>Search query: {q}</h3>}
    </div>
  );
}
