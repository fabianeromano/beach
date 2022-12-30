import Carousel from "../../components/carousel";
import { Destinations } from "../../components/destinations";
import Hero from "../../components/hero";
import Layout from "../../components/layout";
import { Search } from "../../components/Search";
import Selects from "../../components/selects";

export const Home = () => {
    return ( 
        <Layout>
            <Hero/>
            <Destinations/>
            <Search/>
            <Selects/>
            <Carousel/>
        </Layout>
     );
}