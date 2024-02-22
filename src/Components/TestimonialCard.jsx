import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
// import img from '../assets/img/team-1.jpg'
import PropTypes from 'prop-types'
const TestimonialCard = ({testi}) => {
    const { img, name, comment} = testi;
    return (
        <div className='w-full flex py-10 justify-center'>
            <div className="border rounded-md p-5 pt-12 max-w-2xl w-full mx-auto bg-slate-50 text-center relative">
                <img className='h-20 w-20 rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 border-4 border-slate-100' src={img} alt="" />
                <div className='absolute -top-2 left-10 text-xl text-Second'><FaQuoteLeft /></div>
                <div className='absolute -bottom-2 right-10 text-xl text-Second'><FaQuoteRight /></div>

                <p className="text-2xl font-bold">{name}</p>
                <p className='text-Second'>{comment}</p>
            </div>
        </div>
    );
};
TestimonialCard.propTypes ={
    testi: PropTypes.object
}
export default TestimonialCard;