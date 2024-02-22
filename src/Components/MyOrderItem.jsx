import PropTypes from 'prop-types'
import { MdDeleteOutline } from "react-icons/md";
import UseAxios from '../hooks/UseAxios';
import Swal from 'sweetalert2';

const MyOrderItem = ({ order }) => {
    const { name, image, price, _id } = order;
    const axiosURL = UseAxios()
    const handleDelete = id => {
        console.log(id);
        axiosURL.delete(`/myorder/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Delete Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <tr>
            <td>
                <img className="h-10" src={image} alt="" />
            </td>
            <td>{name}</td>
            <td>{price} BDT</td>
            <td>
                <div onClick={() => handleDelete(_id)} className='h-10 w-10 rounded-full bg-red-100 duration-200 flex justify-center items-center text-2xl text-red-600 hover:bg-red-200'>
                    <MdDeleteOutline />
                </div>
            </td>
        </tr>
    );
};

MyOrderItem.propTypes = {
    order: PropTypes.object
}
export default MyOrderItem;