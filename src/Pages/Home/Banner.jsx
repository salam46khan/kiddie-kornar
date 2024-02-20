import banne1 from '../../assets/img/b-1.jpeg'
import banne2 from '../../assets/img/b-2.jpg'
import banne3 from '../../assets/img//b-3.jpg'
import Slider from 'react-slick';
import MyBtn from '../../Components/MyBtn';
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    return (
        <div className='h-svh overflow-hidden relative'>
            <div className='absolute top-0 left-0 h-full w-full z-40 bg-Primary bg-opacity-75'>
                <div className='h-full w-full container mx-auto flex justify-center items-center -mt-16 text-white'>
                    <div className='text-center w-full max-w-lg space-y-2 p-5'>
                        <p className=''>Wolcome to</p>
                        <h2 className='font-extrabold text-4xl md:text-6xl'>KiddieKorner</h2>
                        <p className='text-xl md:text-2xl'>Where Little Dreams Begin to Play!</p>
                        <p className='text-Second'>Discover a world of wonder and imagination with our delightful collection of toys.</p>
                        <div>
                            {/* <button className='btn'>Add Product</button> */}
                            <MyBtn action={''}></MyBtn>
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings} className='bg-red-200 h-svh'>
                <img className='h-screen min-w-full object-cover' src={banne1} alt="" />
                <img className='h-screen min-w-full object-cover' src={banne3} alt="" />
                <img className='h-screen min-w-full object-cover' src={banne2} alt="" />
            </Slider>
        </div>
    );
};

export default Banner;