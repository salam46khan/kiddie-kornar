import About from "./About";
import Banner from "./Banner";
import Brand from "./Brand";
import Call from "./Call";
import Choose from "./Choose";
import Contact from "./Contact";
import FAQs from "./FAQs";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Choose></Choose>
            <Testimonial></Testimonial>
            <Team></Team>
            <FAQs></FAQs>
            <About></About>
            <Call></Call>
            <Contact></Contact>
        </div>
    );
};

export default Home;