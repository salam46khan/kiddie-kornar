import { Link } from 'react-router-dom';
import img from '../assets/img/img-1.png'
import MyBtn from './MyBtn';
import PropTypes from 'prop-types'
import { Rating } from '@smastrom/react-rating';

const ProductCard = ({ product }) => {
    const { name, price, rating, image } = product;
    return (
        <div className="bg-slate-100 border-slate-100 border-4 shadow-md hover:shadow-xl hover:-translate-y-2 duration-200 hover:shadow-gray-300 rounded-md overflow-hidden">
            <div className='h-[200px] z-10 relative overflow-clip pb-1'>
                <div className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-[200%] bg-slate-100 -rotate-6 z-20 border'>

                </div>
                <img className='h-full w-full hover:scale-125 z-0 object-cover duration-300' src={image} alt="" />
            </div>
            <div className='pt-0 p-5 text-center z-50'>
                <h4 className='text-2xl font-bold'>{name}</h4>
                
                    <Rating
                        
                        className='max-w-[150px] mx-auto py-2 '
                        value={rating}
                        readOnly
                        ThinStar
                    />
                

                <div className="divider divider-Second text-2xl font-thin">{price} BDT</div>
                <div className=' text-center'>
                    <Link className='mx-auto text-white' to={'/'}>
                        <MyBtn action={'Details'}></MyBtn>
                    </Link>
                </div>

            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object
}
export default ProductCard;