import { useContext } from "react";
import PageTitle from "../Components/PageTitle";
import { AuthContext } from "../Provider/AuthProvider";
import MyBtn from "../Components/MyBtn";

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
    const { displayName, photoURL, email, phoneNumber } = user;

    const handleLogOut = () => {
        logOut()
            .then(console.log('success'))
            .catch(error => console.log(error))
    }

    const handleReview = e =>{
        e.preventDefault()
        const comment = e.target.comment.value;
        console.log(comment);
    }
    return (
        <div>
            <PageTitle title={'Profile'}></PageTitle>
            <div className="py-10 px-2">
                <div className="flex container mx-auto flex-col gap-4 md:flex-row">
                    <div className="w-full p-3 md:w-1/4 h-fit rounded-md bg-slate-50">
                        <img className="w-full" src={photoURL} alt="" />
                        <div className="py-8">
                            <p className="font-bold text-2xl capitalize text-center pb-3">{displayName}</p>
                            <p>Email:{email}</p>
                            <p>Phone: {phoneNumber ? phoneNumber : 'Not Found'}</p>
                        </div>
                        <div className="py-4">
                            <div className="text-center text-red-100" onClick={handleLogOut}>
                                <MyBtn action={'Log Out'}></MyBtn>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-3 md:w-3/4 h-full">
                        <div className="text-center w-full max-w-md mb-3 mx-auto">
                            <p className="font-semibold text-xl">Hi {displayName}, welcome to Kiddie Korner.</p>
                            <p>You can share your openion after visiting our site or benifited by us</p>
                        </div>
                        <hr />
                        <div className="p-3 ">
                            <div className="bg-slate-50 mx-auto text-center p-3 w-full max-w-xl">
                                <form onSubmit={handleReview} className="py-2">
                                    <textarea placeholder="comment" name="comment" required className="textarea w-full textarea-bordered"></textarea>
                                    <div className="text-white mt-4">
                                        {/* <MyBtn action={'Comment'}></MyBtn> */}
                                        <input className=' p-3 rounded-md bg-slate-300 hover:bg-slate-400 text-white duration-200 shadow-gray-400 shadow-md hover:-translate-y-1 hover:shadow-gray-300 hover:shadow-lg' type="submit" value="Comment" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;