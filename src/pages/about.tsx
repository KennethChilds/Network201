import Head from "next/head";
import Link from "next/link";

export default function About() {
    return(
        <>
      <Head>
        <title>Network201</title>
        <meta name="Network201 Is a Network of Young and Talented People that are Interested in Building the Future"/>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </Head>
      <main className="">
        <div className="flex h-screen flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="">More Information</span>
          </h1>
          <h2 className="container flex flex-col px-4">
            <span className="text-2xl text-center">We help young people build their startups.</span>
            <span className="text-2xl text-center">Gain access to mentoring, collaborate with likemindend
            individuals, and start a real business</span>
            <span className="text-2xl text-center">All for free.</span>
          </h2>
            <div className="flex flex-col items-center justify-end">
            <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-violet-500 p-4 text-white hover:bg-violet-600/100"
                href="/"
                target="_blank"
                >
                <h3 className="text-2xl font-bold text-center">Home →</h3>
                </Link> 
            </div>
            <div>contact@network201.com</div>
        </div>
      </main>
    </>
    );
}