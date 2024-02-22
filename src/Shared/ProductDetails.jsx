import { useParams } from "react-router-dom";
import MyBtn from "../Components/MyBtn";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxios from "../hooks/UseAxios";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const respon = useParams()
    const axiosURL = UseAxios()
    const [singleProduct, setSingleProduct] = useState({})
    const { name, brand, price, rating, type, details, image } = singleProduct
    axiosURL.get(`/product/${respon.id}`)
        .then(res => {
            // console.log(res.data);
            setSingleProduct(res.data)
        })

    const { user } = useContext(AuthContext)

    const handleOrder = () => {
        const clintEmail = user.email
        const productId = respon.id

        const OrderProduct = {name, clintEmail, productId, price, image, brand}
        // console.log(OrderProduct);
        axiosURL.post('/order', OrderProduct)
            .then(res => {
                console.log(res.data);
                if(res.data.acknowledged === true){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your product add Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="py-4 px-2 ">
            <div className="container mx-auto overflow-hidden py-12">
                <div className="bg-slate-100 w-full mx-auto max-w-3xl p-4 shadow-xl shadow-gray-400 flex flex-col md:flex-row gap-5 items-center relative overflow-hidden">
                    <p className="absolute min-w-36 text-white rotate-45 text-center translate-x-1/2 -translate-y-1/2 bg-slate-400 right-8 top-8 p-2">{brand}</p>
                    <div className="w-full md:w-2/4">
                        <img src={image} alt="" />
                    </div>
                    <div className="w-full md:w-2/4">

                        <h2 className="font-semibold text-2xl">{name}</h2>
                        <Rating
                            className='max-w-[140px] py-2 '
                            value={rating}
                            readOnly
                            ThinStar
                        />
                        <p className="text-sm">{type}</p>
                        <p className="text-2xl font-thin">Price: {price} BDT</p>
                        <p className="text-slate-400">{details}</p>
                        <div className="text-white pt-3">
                            <div onClick={handleOrder} className=" inline-block"><MyBtn action={'Order Now'}></MyBtn></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;