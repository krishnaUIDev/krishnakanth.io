import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";

const Home: NextPage = () => {
  const t = useTranslations("home");

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="This is official site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-6 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            This is a place to write, read, and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <Image
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
          className="hidden md:inline-flex h-12 lg:h-full"
        />
      </div>
    </div>
  );
};

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default Home;
