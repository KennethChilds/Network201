import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Network201</title>
        <meta name="Network201 Is a Network of Young and Talented People that are Interested in Building the Future"/>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </Head>
      <main className="">
        <div className="flex h-screen flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="">Network201</span>
          </h1>
          <h2 className="text-4xl container flex flex-col items-center justify-center px-4">
            <span className="">A Network Of Exceptional, Young Talent</span>
          </h2>
          <div className="gap-4">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-violet-500 p-4 text-white hover:bg-violet-600/100"
              href="https://forms.gle/1MPUxMucvZwvKP5n8"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Apply →</h3>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

