import { useState } from "react";
import Slider from "react-slick";
import TestimonialCard from "../../Components/TestimonialCard";
import UseAxios from "../../hooks/UseAxios";

const Testimonial = () => {
    const axiosURL = UseAxios()
    const [testi, setTest] = useState([])
    
    const test = testi.length>5 ? testi.slice(0,5) : testi;

    axiosURL.get("/review")
    .then(res => {
        setTest(res.data)
    })


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true
    };
    return (
        <div className="py-16 testimonial px-2">
            <div className="container mx-auto">
                <div className="">
                    <div className='max-w-lg w-full mx-auto text-center'>
                        <h2 className='font-bold text-4xl text-white'>Testimonial</h2>
                        <p className='text-Second'>Discover a world of wonder and imagination with our delightful collection of toys.</p>
                    </div>
                    <Slider {...settings} className='pt-10 overflow-hidden'>

                        {
                            test.map(test => <TestimonialCard key={test._id} testi={test}></TestimonialCard>)
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;