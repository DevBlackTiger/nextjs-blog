import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>

        <Image src="/images/AvatarMaker.png" width={500} height={500} />
      </Layout>
    </>
  );
};
