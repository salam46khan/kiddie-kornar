import Slider from 'react-slick';
import brand1 from '../../assets/img/brand-1.jpg'
import brand2 from '../../assets/img/brand-2.png'
import brand3 from '../../assets/img/brand-3.png'
import brand4 from '../../assets/img/brand-4.jpeg'
import brand5 from '../../assets/img/brand-5.png'
import brand6 from '../../assets/img/brand-6.png'
import brand7 from '../../assets/img/brand-7.png'
import brand8 from '../../assets/img/brand-8.png'
const Brand = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <div className='py-5 px-2'>
            <div className=' container mx-auto'>
                <Slider {...settings} className="relative flex items-center justify-center gap-3 w-full overflow-hidden">
                    <img
                        className="md:p-10 p-2 grayscale hover:grayscale-0  duration-300"
                        src={brand1}
                    />
                    <img
                        className="md:p-10 p-2 grayscale hover:grayscale-0  duration-300"
                        src={brand2}
                    />
                    <img
                        className="md:p-10 p-2 grayscale hover:grayscale-0  duration-300"
                        src={brand3}
                    />
                    <img
                        className="md:p-10 p-2 grayscale hover:grayscale-0  duration-300"
                        src={brand4}
                    />
                    <img
                        className="md:p-10 p-2 grayscale hover:grayscale-0  duration-300"
                        src={brand5}
                    />
                    <img
                        className="md:p-10 p-2 my-auto grayscale hover:grayscale-0  duration-300"
                        src={brand6}
                    />
                    <img
                        className="md:p-10 p-2 grayscale hover:grayscale-0  duration-300"
                        src={brand7}
                    />
                    <img
                        className="md:p-10 p-2 grayscale hover:grayscale-0  duration-300"
                        src={brand8}
                    />


                </Slider>
            </div>
        </div>

    );
};

export default Brand;