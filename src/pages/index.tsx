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
        <div className="flex h-dvh flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-violet-6 justify-center items-center">Network201</span>
          </h1>
          <h2 className="text-4xl container flex flex-col items-center justify-center text-center px-4">
            <span className="">A Human Capital Organization Comprising of Exceptional, Young Talent.</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-violet-500 p-4 text-white hover:bg-violet-600/100"
              href="https://forms.gle/1MPUxMucvZwvKP5n8"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-center">Apply →</h3>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-violet-500 p-4 text-white hover:bg-violet-600/100"
              href="/about"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-center">About Us →</h3>
            </Link>
          </div>
          <h2 className="container flex flex-col justify-end text-center">
            <div className="">contact@network201.com</div>
          </h2>
        </div>
      </main>
    </>
  );
}
