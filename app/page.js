import Layout from "../components/layout";
import Hero from "./hero";
import Preview from "./preview";
import Banner from "./banner";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Preview />
      <Banner />
    </Layout>
  );
}
