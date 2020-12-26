import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Mayhem, TodayProps } from "../components/Mayhem";
import { getTodaysModes, isItMayhem } from "../services/modes";

export const getServerSideProps: GetServerSideProps<TodayProps> = async () => {
  const todayModes = await getTodaysModes();

  const mayhem = isItMayhem(todayModes);

  return {
    props: { mayhem },
  };
};

const IndexPage = ({ mayhem }: TodayProps) => (
  <>
    <Head>
      <title>Is it Total Mayhem now?</title>
      <link rel="preload" href="/overwatch.woff" as="font" />
      <link rel="preload" href="/overwatch-italic.woff" as="font" />
    </Head>
    <Mayhem mayhem={mayhem} />
  </>
);

export default IndexPage;
