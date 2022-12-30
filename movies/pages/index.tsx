import Head from 'next/head';
import { Mulish } from '@next/font/google';
import classNames from 'classnames';
import HomePage from '@/components/HomePage';

const mulish = Mulish({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies - Nubo</title>
        <meta name="description" content="Search movies example on Nubo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classNames(mulish.className)}>
        <HomePage />
      </main>
    </>
  );
}
