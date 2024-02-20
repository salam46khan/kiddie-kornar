import { Link } from 'react-router-dom';
// import team2 from '../assets/img/team-2.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import PropTypes from 'prop-types'

const TeamCard = ({ team }) => {
    const {name, post, img,fb, ins, twi} = team;
    return (
        <div className="bg-slate-400 bg-opacity-20 w-full shadow-md hover:shadow-lg hover:-translate-y-1 md:max-w-sm rounded-md p-2 shadow-gray-400 duration-200">
            <img className='w-full rounded' src={img} alt="" />
            <div className='text-center py-2'>
                <p className='text-2xl font-semibold'>{name}</p>
                <p>{post}</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <Link className='h-9 w-9 rounded-full bg-slate-300 hover:bg-blue-500 text-white flex justify-center items-center text-xl duration-200' to={`/${fb}`}>
                    <FaFacebookF />
                </Link>
                <Link className='h-9 w-9 rounded-full bg-slate-300 hover:bg-slate-700 duration-200 text-white flex justify-center items-center text-xl' to={`/${twi}`}>
                    <BsTwitterX />
                </Link>
                <Link className='h-9 w-9 rounded-full bg-slate-300 hover:bg-pink-500 duration-200 text-white flex justify-center items-center text-xl' to={`/${ins}`}>
                    <FaInstagram />
                </Link>
            </div>
        </div>
    );
};
TeamCard.propTypes = {
    team: PropTypes.object
}
export default TeamCard;