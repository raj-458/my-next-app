import Head from "next/head";
import Image from "next/image";

import { useRouter } from 'next/router'


export default function Docs() {
  const router = useRouter();
  const { params } = router.query;
  console.log("================================>", router)

  return (
    <div>
      <h3>Welcome to Docs Route (/docs) </h3>
    </div>
  );
}
