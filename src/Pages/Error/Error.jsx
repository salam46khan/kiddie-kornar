import { PiMaskSadThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container mx-auto flex justify-center items-center h-screen py-16 px-2">
            <div className="bg-Second relative w-full max-w-sm  p-5 text-center">
                <div className="absolute h-16 w-16 bg-white -translate-y-[50%] rounded-full left-[50%] -translate-x-1/2 top-0 ">
                    <div className="h-full w-full border-8 rounded-full border-Second flex justify-center items-center">

                        <PiMaskSadThin className="text-4xl text-Second"></PiMaskSadThin>
                    </div>
                </div>
                <h1 className="mt-4 text-5xl font-bold">404</h1>
                <p className="text-xl">Page not found</p>
                <div className="flex justify-evenly mt-4">
                    <Link className="btn" to={-1}>Go Back</Link>
                    <Link className="btn" to={'/'}>Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;