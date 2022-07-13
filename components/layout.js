import Head from "next/head"

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <title>Oleksander Tepliuk</title>
      <link rel="stylesheet" href="/favicon.ico" />
    </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
