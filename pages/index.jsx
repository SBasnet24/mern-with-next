import React from "react";
import Layout from "./../components/Layouts";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>MERN WITH NEXT</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Head>
      <Layout>Hello Next</Layout>
    </div>
  );
};

export default Home;
