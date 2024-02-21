import { useState } from "react";
import PageTitle from "../../Components/PageTitle";

const AddProduct = () => {
    const [imageUrl, setImageUrl] = useState('');
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
                setImageUrl(data.data.url);
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    console.log(imageUrl);

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const details = form.details.value;
        const image = imageUrl;

        const product = {name, brand, price, rating, type, details, image}
        console.log(product);
    }

    return (
        <div>
            <PageTitle title={'Add-Product'}></PageTitle>
            <div className="py-10 px-2 container mx-auto">
                <div className="bg-slate-50 mx-auto w-full max-w-3xl rounded-md shadow-xl">
                    <form onSubmit={handleAddProduct} className="card-body">
                        <div className="flex w-full flex-col md:flex-row gap-5">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="product name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" name="brand" placeholder="brand name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex w-full flex-col md:flex-row gap-5">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" max={5} min={1} name="rating" placeholder="rating (1-5)" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex w-full flex-col md:flex-row gap-5">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Product Photo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full" accept="image/*" onChange={handleImageUpload} required />
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select name="type" className="select select-bordered w-full">
                                    <option disabled selected>Select product type</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <textarea name="details" className="w-full textarea textarea-bordered" placeholder={'product details'}></textarea>
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

export default AddProduct;