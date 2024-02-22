import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxios from "../hooks/UseAxios";
import MyProductItem from "./MyProductItem";

const Myproduct = () => {
    const {user} = useContext(AuthContext);
    const axiosURL = UseAxios()
    const [myProduct, setMyProduct] = useState([])
    
    axiosURL.get(`/myproduct?email=${user.email}`)
    .then(res => {
        // console.log(res.data);
        setMyProduct(res.data)
    })
    return (
        <div>
            <div className="w-full mt-16 max-w-3xl overflow-hidden border mx-auto p-4 shadow-lg shadow-gray-400 bg-slate-100">
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
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myProduct.map(product => <MyProductItem key={product._id} product={product}></MyProductItem>)
                                }

                                {/* {
                                    myOrder.map(order => <MyOrderItem key={order._id} order={order}></MyOrderItem>)
                                } */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myproduct;