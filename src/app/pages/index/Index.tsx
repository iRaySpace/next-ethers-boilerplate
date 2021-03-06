import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Next-Tailwind-TS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-500 text-center p-40">
        <h1 className="lg:text-7xl font-extrabold text-white mb-9">
          Welcome to Next-Tailwind-TS.
        </h1>
        <p className="text-2xl text-white">
          Get started by editing{' '}
          <code className="bg-gray-50 text-gray-900 font-mono py-3 border border-gray-200 rounded-xl px-3">
            pages/index.js
          </code>
        </p>
      </header>

      <main className="max-w-screen-lg mx-auto mt-20">
        <section>
          <h2 className="uppercase text-lg font-semibold text-green-600 mb-3">
            Powered by latest techonologies
          </h2>
          <p className="text-6xl font-extrabold text-gray-900 mb-8">
            Boilerplate for your needs.
          </p>
          <p className="max-w-4xl text-2xl font-medium text-gray-500">
            Next.js and Tailwind CSS libraries using TypeScript helps you
            kickstart your latest projects.
          </p>
        </section>
      </main>
    </div>
  )
}
