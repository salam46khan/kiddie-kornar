import { useState } from "react";
import PageTitle from "./PageTitle";
import { useParams } from "react-router-dom";
import UseAxios from "../hooks/UseAxios";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const respon = useParams()
    const axiosURL = UseAxios()

    const [productData, setProductData] = useState({})

    axiosURL.get(`product/${respon.id}`)
    .then(res => {
        setProductData(res.data)
    })

    // console.log(productData);
    const { name, brand, price, rating, type, details, image} = productData;



    const [selectedOption, setSelectedOption] = useState(type);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const [imageUrl, setImageUrl] = useState(image);
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=89a166bb30fc9fe5370d42251464e28e', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                if(data.data.url){
                    setImageUrl(data.data.url);
                }
                
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    // console.log(imageUrl);

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const details = form.details.value;
        const image = imageUrl;

        const UpdateProduct = { name, brand, price, rating, type, details, image };
        console.log(UpdateProduct);

        axiosURL.put(`/myproduct/${respon.id}`, UpdateProduct)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your product update Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
            <PageTitle title={'Update-Product'}></PageTitle>
            <div className="py-10 px-2 container mx-auto">
                <div className="bg-slate-100 mx-auto w-full max-w-3xl rounded-md shadow-xl">
                    <form onSubmit={handleUpdateProduct} className="card-body">
                        <div className="flex w-full flex-col md:flex-row gap-5">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} className="input input-bordered" />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="brand" defaultValue={brand} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex w-full flex-col md:flex-row gap-5">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" defaultValue={price} className="input input-bordered" />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" max={5} min={1} name="rating" defaultValue={rating}  className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex w-full flex-col md:flex-row gap-5">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full" accept="image/*" onChange={handleImageUpload} required/>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select name="type" value={selectedOption} onChange={handleSelectChange} className="select select-bordered w-full">

                                    <option value="Educational">Educational</option>
                                    <option value="Sensory">Sensory</option>
                                    <option value="Stacking">Stacking Toy</option>
                                    <option value="Stuffed">Stuffed Animal</option>
                                    <option value="play">Play Gym</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <textarea name="details" className="w-full textarea textarea-bordered"  defaultValue={details}></textarea>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <input className=' p-3 rounded-md bg-slate-300 hover:bg-slate-400 text-white duration-200 shadow-gray-400 shadow-md hover:-translate-y-1 hover:shadow-gray-300 hover:shadow-lg' type="submit" value="Add Product" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;