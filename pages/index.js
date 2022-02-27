import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <div>
        <Header />
        <h1 className='text-3xl font-bold underline bg-orange-700'>
          Hello world!
        </h1>
      </div>
    </>
  );
}
