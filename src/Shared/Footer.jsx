import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'
import { FaFacebookF, FaHome, FaInstagram, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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
                        <div className='space-y-3'>
                            <div className='flex gap-3 items-center'>
                                <FaHome className='inline-block text-xl'></FaHome>
                                <p>Satkhira, Bangladesh</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <IoIosMail className='inline-block text-xl'></IoIosMail>
                                <p>kiddie-kornar@gmail.com</p>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <FaPhone className='inline-block text-xl'></FaPhone>
                                <p>+8801575-235909</p>
                            </div>
                            <div className='flex gap-3 pt-6 items-center'>
                                <Link className='rounded-full h-10 flex w-10 justify-center items-center hover:bg-blue-500 bg-slate-400 text-gray-300 hover:text-white duration-150 hover:shadow-lg' to={'/'}>
                                    <FaFacebookF className='inline-block text-xl'></FaFacebookF>
                                </Link>
                                <Link className='rounded-full h-10 flex w-10 justify-center items-center hover:bg-pink-500 bg-slate-400 text-gray-300 hover:text-white duration-150 hover:shadow-lg' to={'/'}>
                                    <FaInstagram className='inline-block text-xl'></FaInstagram>
                                </Link>
                                <Link className='rounded-full h-10 flex w-10 justify-center items-center hover:bg-sky-300 bg-slate-400 text-gray-300 hover:text-white duration-150 hover:shadow-lg' to={'/'}>
                                    <FaTwitter className='inline-block text-xl'></FaTwitter>
                                </Link>
                                <Link className='rounded-full h-10 flex w-10 justify-center items-center hover:bg-red-400 bg-slate-400 text-gray-300 hover:text-white duration-150 hover:shadow-lg' to={'/'}>
                                    <FaYoutube className='inline-block text-xl'></FaYoutube>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto text-center mt-2'>
                <hr className='border-Second'/>
                <p className='text-Second mt-2 text-lg'>
                    &copy; 2024 KiddieKorner. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;