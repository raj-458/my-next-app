import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'

export default function PostsId() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h3>Welcome to PostsID "{id}" Route (/:id): </h3>
    </div>
  );
}
