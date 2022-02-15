import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'

export default function ProductId() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h3>Welcome to ProductId "{productId}" and ReviewId "{reviewId}" Route (/product/:productId/review/:reviewId) </h3>
    </div>
  );
}
