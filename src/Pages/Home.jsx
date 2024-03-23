import Contact from "../Components/Contact/Contact";
import Hero from "../Components/Hero/Hero";
import Testimonials from "../Components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Hero></Hero>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;