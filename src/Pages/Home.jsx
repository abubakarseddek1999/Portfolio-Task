import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Hero from "../Components/Hero/Hero";
import Projects from "../Components/Projects/Projects";
// import Navbar from "../Components/Navbar/Navbar";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";
import Testimonials from "../Components/Testimonials/Testimonials";
import Timeline from "../Components/Timeline/Timeline";


const Home = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            {/* <Navbar></Navbar> */}
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
            <Timeline></Timeline>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;