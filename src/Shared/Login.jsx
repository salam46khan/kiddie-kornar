import { Link, useNavigate } from 'react-router-dom';
import log from '../assets/img/log-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
    const { logInUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLog = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        console.log(email, password);
        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="px-2 py-16 bg-slate-50">
            <div className="flex justify-center">
                <div className="bg-white w-full max-w-2xl flex p-5 shadow-2xl shadow-slate-300">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className=' w-full p-2'>
                            <h2 className='font-bold text-2xl text-center'>Login Here</h2>
                            <form onSubmit={handleLog} className="p-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className=' p-3 rounded-md bg-slate-300 hover:bg-slate-400 text-white duration-200 shadow-gray-400 shadow-md hover:-translate-y-1 hover:shadow-gray-300 hover:shadow-lg' type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='text-center mt-5'>
                                Not registerd! <Link className='text-blue-600 font-semibold' to={'/registation'}>Create an accound</Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">
                        <img className='w-full' src={log} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;