import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      {/* {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )} */}
      New deployment ayo
      <br />
      <Link href="/api/auth/login">Login</Link>
      <br />
      <Link href="/api/auth/logout">Logout</Link>
      <br />
      Here I am gonna fetch some data Le fam
      {JSON.stringify(data)}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { data: data },
  };
};
