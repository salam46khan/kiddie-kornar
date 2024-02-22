import { useContext, useState } from "react";
import PageTitle from "../../Components/PageTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxios from "../../hooks/UseAxios";
import MyOrderItem from "../../Components/MyOrderItem";
import Myproduct from "../../Components/Myproduct";

const MyCart = () => {
    const { user } = useContext(AuthContext)
    const axiosURL = UseAxios()

    const [myOrder, setMyOrder] = useState([])

    axiosURL.get(`/orders?clintEmail=${user.email}`)
        .then(res => {
            // console.log(res.data);
            setMyOrder(res.data)
        })
    return (
        <div>
            <PageTitle title={'My-Cart'}></PageTitle>
            <div className="py-10 px-2 container mx-auto">
                <div className="w-full max-w-3xl overflow-hidden border mx-auto p-4 shadow-lg shadow-gray-400 bg-slate-100">
                    <h2 className="text-center text-2xl font-bold mb-3">My Order</h2>
                    <hr />
                    <div className="bg-white rounded-md p-3 mt-3">


                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Cancel Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    
                                    {
                                        myOrder.map(order => <MyOrderItem key={order._id} order={order}></MyOrderItem>)
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <Myproduct></Myproduct>
            </div>
        </div>
    );
};

export default MyCart;