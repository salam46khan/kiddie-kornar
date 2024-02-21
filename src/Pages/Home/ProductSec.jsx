import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import MyBtn from "../../Components/MyBtn";

const ProductSec = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const limitProduct = products.slice(0, 8)
    return (
        <div className="py-16 px-2 ">
            <div className="container mx-auto">
                <div className="w-full mx-auto md:max-w-lg text-center">
                    <p className="font-bold text-slate-400">New Product</p>
                    <h2 className="text-4xl font-bold">Our Product</h2>
                    <p className="text-slate-400">Discover a world of wonder and imagination with our delightful collection of toys.</p>
                </div>
                <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        limitProduct.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
                <div className="text-center text-white mt-10">
                    <MyBtn action={'See More'}></MyBtn>
                </div>
            </div>
        </div>
    );
};

export default ProductSec;