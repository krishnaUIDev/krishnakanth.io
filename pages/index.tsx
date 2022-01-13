import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Home: NextPage = () => {
  const t = useTranslations("home");

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="This is official site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-2">test</div>
        <Link href="/api/auth/login">
          <a>About Us</a>
        </Link>
      </main>

      <footer>
        <div>test</div>
      </footer>
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
