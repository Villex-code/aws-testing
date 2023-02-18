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
      New deployment here
      <br />
      <Link href="/api/auth/login">Login with auth0</Link>
      <br />
      <Link href="/api/auth/logout">Logout from auth0</Link>
      <br />
      Here I am gonna fetch some data Le fam
      {JSON.stringify(data)}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(process.env.MY_ENV_LINK);
  const data = await res.json();

  return {
    props: { data: data },
  };
};
