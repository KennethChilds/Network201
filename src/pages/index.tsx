import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>harvest</title>
        <meta name="harvest is a service that allows you to realize losses on unsellable nft's"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex h-screen flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="">harvest</span>
          </h1>
          <h2 className="text-4xl container flex flex-col items-center justify-center px-4">
            <span className="">realize losses on unsellable nft's!</span>
          </h2>
          <div className="gap-4">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-violet-500 p-4 text-white hover:bg-violet-600/100"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Connect Your Wallet →</h3>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

