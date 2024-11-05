/* eslint-disable react/prop-types */
import { MdOutlineCancel } from "react-icons/md";


const WishList = ({ product, handleDelete }) => {
    const { product_title, product_image, description, price } = product;

    return (
        <div className="w-10/12 mx-auto">

            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Wishlist</h3> 
            </div>

            <div className="flex gap-6 border-2 rounded-3xl my-5 ">
                <div>
                    <img src={product_image} alt="Product" className="rounded-2xl max-w-[200px] h-32 object-cover my-2" />
                </div>

                <div className="text-start">
                    <h2 className="text-lg font-bold my-2">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-semibold my-3">Price: ${price}</p>
                    <button className="btn bg-[#9538E2] text-white text-lg font-bold rounded-full px-6">Add to Card</button>
                </div>
                <button 
                    onClick={() => handleDelete(product.product_id)}
                    className="ml-auto btn text-4xl  font-bold rounded-full text-red-600">
                    <MdOutlineCancel />
                </button>
            </div>
        </div>
    );
};

export default WishList;
