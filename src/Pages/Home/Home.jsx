import Banner from "./Banner";
import Brand from "./Brand";
import Choose from "./Choose";
import FAQs from "./FAQs";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brand></Brand>
            <Testimonial></Testimonial>
            <Team></Team>
            <Choose></Choose>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;