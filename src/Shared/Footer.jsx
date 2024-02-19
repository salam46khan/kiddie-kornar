import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'
const Footer = () => {
    return (
        <div className="py-16 px-2 bg-Primary text-white">
            <div className="container mx-auto flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 space-y-3 md:p-2">
                    <img className='bg-slate-700 md:w-1/2 bg-opacity-30 rounded-md' src={logo} alt="" />
                    <p>
                        At KiddieKorner, we are passionate about nurturing young minds through play, offering a curated collection of high-quality toys that inspire creativity, spark imagination, and promote learning. With a commitment to safety, innovation, and fun, we are here to accompany your little ones on their journey of growth and discovery.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-5">
                    <div className='w-full md:w-1/2'>
                        <h5 className='font-bold text-xl mb-5'>Useful Links</h5>
                        <ul className='text-Second'>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/'}>About us</Link></li>
                            <li><Link to={'/'}>Profile</Link></li>
                            <li><Link to={'/'}>Add product</Link></li>
                            <li><Link to={'/'}>My Cart</Link></li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h5 className='font-bold text-xl mb-5'>Contact Us</h5>
                        <div>
                            <div>
                                
                            <p>Satkhira, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;