import MainStripe from "./MainStripe/MainStripe";
import OurServicesStripe from "./OurServicesStripe/OurServicesStripe";
import DealsStripe from "./DealsStripe/DealsStripe";
import WhyAppituneityStripe from "./WhyAppituneityStripe/WhyAppituneityStripe";
import FaqStripe from "./FaqStripe/FaqStripe";
import DedicatedTeamsStripe from "./DedicatedTeamsStripe/DedicatedTeamsStripe";
import TechnologiesStripe from "./TechnologiesStripe/TechnologiesStripe";
import VideoStripe from "./VideoStripe/VideoStripe";
import FormStripe from "./FormStripe/FormStripe";
import Footer from "../../components/Footer/Footer";



const Home = () => {
    return (
        <>
            <main>
                <MainStripe />
                <OurServicesStripe />
                <DealsStripe />
                <VideoStripe />
                <WhyAppituneityStripe />
                <DedicatedTeamsStripe />
                <FaqStripe />
                <TechnologiesStripe />
                <FormStripe />
            </main>
            <Footer />
        </>
    );
}
export default Home;