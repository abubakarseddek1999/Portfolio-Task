import Contact from "../Components/Contact/Contact";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";
import Testimonials from "../Components/Testimonials/Testimonials";
import Timeline from "../Components/Timeline/Timeline";


const Home = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Hero></Hero>
            <Services></Services>
            <Skills></Skills>
            <Timeline></Timeline>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;