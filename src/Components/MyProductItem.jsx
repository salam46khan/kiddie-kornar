import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";

const MyProductItem = ({ product }) => {
    const { image, name, price, _id } = product;


    return (
        <tr>
            <td>
                <img className="h-10" src={image} alt="" />
            </td>
            <td>{name}</td>
            <td>{price} BDT</td>
            <td>
                <Link to={`/myproduct/${_id}`} className='h-10 w-10 rounded-full bg-green-100 duration-200 flex justify-center items-center text-2xl text-green-600 hover:bg-green-200'>
                    <FaEdit />
                </Link>
            </td>
        </tr>
    );
};

MyProductItem.propTypes = {
    product: PropTypes.object
}
export default MyProductItem;