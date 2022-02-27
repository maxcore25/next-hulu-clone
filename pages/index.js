import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <div>
        <Header />
        <Nav />
      </div>
    </>
  );
}
