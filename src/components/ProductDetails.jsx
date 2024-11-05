


import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredProductList } from "../utility/addToLS";

const ProductDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData();

    const product = data.find(product => product.product_id == productId);

    console.log(product);

        const handeAddToCard = (id) => {
            addToStoredProductList(id);
        }

    return (
        <div className="min-h-[394px] bg-[#9538E2] rounded-3xl  relative mb-96">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white pt-8">Product Details</h2>
                <p className="text-white my-7 text-lg">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="w-[1062px] min-h-[00px] absolute left-1/2 -translate-x-1/2 border-2 p-4 bg-white rounded-3xl">
                {product ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex justify-center items-center">
                                <img src={product.product_image} alt={product.product_title} className="  w-full mx-auto my-4" />
                            </div>

                            <div className="">
                                <h1 className="text-3xl font-bold">{product.product_title}</h1>
                                <p className="mt-4 font-semibold text-lg">Price: ${product.price}</p>
                                <button className="text-lg font-bold border-2 border-green-500 rounded-full bg-[#79bb6147] my-3 px-4 text-[#309C08]">{product.availability ? "In stock" : "Out of stock"}</button>
                                <p className="text-lg font-medium text-gray-500 my-3">{product.description}</p>
                                <ul className="list-disc list-inside">
                                    <h2 className="font-semibold text-lg mb-3">Specification:</h2>
                                    {product.specification.map((spec, index) => (

                                        <li className="" key={index}>{spec}</li>
                                    ))}
                                </ul>
                                <h3 className="font-semibold text-lg mb-3">Rating </h3>
                                <div className="flex gap-3">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                                    </div>
                                    <p>{product.rating}</p>
                                </div>
                                <div>
                                <button
                                onClick={() => handeAddToCard(productId)}
                                className="my-4 btn rounded-full bg-[#9538E2] text-lg  text-white">Add To Card <RiShoppingCart2Line /></button>
                                <button className="btn text-lg rounded-full ml-4 btn-outline"><FaRegHeart /> </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Product not found.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
