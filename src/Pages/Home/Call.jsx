import { Link } from "react-router-dom";
import MyBtn from "../../Components/MyBtn";

const Call = () => {
    return (
        <div className="call py-16 px-2">
            <div className="container mx-auto">
                <div className="w-full md:max-w-lg mx-auto text-slate-100 text-center space-y-2">
                    <h2 className="font-bold text-4xl text-white">Call to Action</h2>
                    <p>Discover a world of wonder and imagination with our delightful collection of toys.</p>
                    <Link to={'+'}>
                        <MyBtn action={'Call to Action'}></MyBtn>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Call;