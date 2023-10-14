import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Services from "../Services/Services";

const Home = () => {

    const services = useLoaderData()

    return (
        <>
            <Banner></Banner>
            <Services services={services}></Services>
            <About></About>
            <Faq></Faq>
        </>
    )
}

export default Home;