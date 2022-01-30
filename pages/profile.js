import React from "react";
import Layout from "../components/Layout";

function Profile() {
  return (
    <Layout secondaryPage>
      <div>test</div>
    </Layout>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default Profile;
