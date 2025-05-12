import type { NextPage } from "next";
import { Nav } from "../../components/navbar/navbar";
import { Layout } from "../../components/navbar/layout";
import { Hero } from "../../components/hero";
import { Trusted } from "../../components/trusted";
import { Box } from "../../components/styles/box";
import { Plans } from "../../components/plans";
import { MaintenancePlans } from "../../components/maintenancePlans";
import { Booking } from "../../components/booking";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        <Booking></Booking>
      </Box>
    </Layout>
  );
};

export default Home;
