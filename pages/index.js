import Head from "next/head";
import Header from "../components/header";
import Nav from "../components/nav";
import Results from "../components/results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Nav />
        <Results results={results} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url ||
      requests.fetchTrending.url}`
  );
  const data = await request.json();

  return {
    props: {
      results: data.results,
    },
  };
}
