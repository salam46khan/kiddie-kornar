import { Link, useNavigate } from "react-router-dom";
import sign from '../assets/img/sign-removebg-preview.png'
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import GoogleLogin from "./GoogleLogin";
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate()

    // const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=89a166bb30fc9fe5370d42251464e28e', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                setImageUrl(data.data.url);
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    console.log('hi', imageUrl);

    const handleReg = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (!/[a-z]/.test(password)) {
            setError('do not have any letter')
            return
        }
        if (!/[0-9]/.test(password)) {
            setError('do not have a numeric characte')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: imageUrl
                })
                // const userInfo = {
                //     name, email
                // }
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data);
                //     })
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className="px-2 py-16 bg-slate-50">
            <div className="flex justify-center">
                <div className="bg-white w-full max-w-2xl flex p-5 shadow-2xl shadow-slate-300">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className=' w-full p-2'>
                            <h2 className='font-bold text-2xl text-center'>Registation Here</h2>
                            <form onSubmit={handleReg} className="p-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload Profile Picture</span>
                                    </label>
                                    <input type="file" accept="image/*" onChange={handleImageUpload} />

                                </div>
                                <div className="form-control mt-6">
                                    <input className=' p-3 rounded-md bg-slate-300 hover:bg-slate-400 text-white duration-200 shadow-gray-400 shadow-md hover:-translate-y-1 hover:shadow-gray-300 hover:shadow-lg' type="submit" value="Sign Up" />
                                </div>
                                <div className="text-red-400 mt-3">
                                    <p>{error ? error : ''}</p>
                                </div>
                            </form>
                            <div className="mt-5">
                                <GoogleLogin></GoogleLogin>
                            </div>
                            <p className='text-center mt-5'>
                                Already have an accound! <Link className='text-blue-600 font-semibold' to={'/login'}>log in</Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">
                        <img className='w-full' src={sign} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;