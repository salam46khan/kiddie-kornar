import MyBtn from "../../Components/MyBtn";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

const Contact = () => {
    return (
        <div className="py-16 px-2">
            <div className="container mx-auto">
                <div className="relative md:pt-16">
                    <div className="md:absolute top-0 left-1/2 md:-translate-x-1/2 md:w-2/3 py-3 md:py-0 ">
                        {/* <div className="grid z-40 grid-cols-2 md:grid-cols-4 justify-around gap-3 border"> */}
                        <div className="flex flex-wrap md:flex-nowrap justify-around gap-5">


                            <div className="w-5/6 md:w-1/4 bg-slate-300 py-2 text-center">
                                <div className=" mx-auto rounded-full bg-slate-200 text-slate-300 text-2xl mt-3 h-9 w-9 flex justify-center items-center">
                                    <FaLocationDot />
                                </div>
                                <p className="font-bold text-xl ">Office Area</p>
                                <div className="text-gray-50">
                                    <p>Kaliganj, Satkhira</p>
                                    <p>Bangladesh</p>
                                </div>
                            </div>
                            <div className="w-10/12 md:w-1/4 bg-slate-300 py-2 text-center">
                                <div className=" mx-auto rounded-full bg-slate-200 text-slate-300 text-2xl mt-3 h-9 w-9 flex justify-center items-center">
                                    <FaPhoneAlt />
                                </div>
                                <p className="font-bold text-xl ">Phone Number</p>
                                <div className="text-gray-50">
                                    <p>+8801575-235909</p>
                                    <p>+8801771-393709</p>
                                </div>
                            </div>
                            <div className="w-5/6 md:w-1/4 bg-slate-300 py-2 text-center">
                                <div className=" mx-auto rounded-full bg-slate-200 text-slate-300 text-2xl mt-3 h-9 w-9 flex justify-center items-center">
                                    <IoIosMail />
                                </div>
                                <p className="font-bold text-xl ">Email</p>
                                <div className="text-gray-50">
                                    <p>kiddie-kornar@gmail.com</p>
                                </div>
                            </div>
                            <div className="w-5/6 md:w-1/4 bg-slate-300 py-2 text-center">
                                <div className=" mx-auto rounded-full bg-slate-200 text-slate-300 text-2xl mt-3 h-9 w-9 flex justify-center items-center">
                                    <TbWorldWww />
                                </div>
                                <p className="font-bold text-xl ">Web site</p>
                                <div className="text-gray-50">
                                    <p>www.kiddie-kornar.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full md:max-w-lg bg-slate-200 mx-auto md:pt-24 md:p-6 py-3">
                        <h2 className="text-4xl font-bold text-center">Contact Us</h2>
                        <div>
                            <form className="card-body space-y-3">
                                <div className="form-control">
                                    <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <textarea type="textarea" placeholder="text" className="textarea textarea-bordered" required />
                                </div>
                                <div className="form-control inline-block text-center text-white mt-3">
                                    {/* <button className="btn btn-primary">Login</button> */}
                                    <MyBtn action={'Submit'}></MyBtn>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;