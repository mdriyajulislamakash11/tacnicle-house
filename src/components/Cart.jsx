/* eslint-disable react/prop-types */

import { MdOutlineCancel } from "react-icons/md";

const Cart = ({ product, handleDelete }) => {
    const { product_title, product_image, description, price } = product;

    return (
        <div className=" w-10/12 mx-auto ">

            <div className="flex gap-6 border-2 rounded-3xl my-5">
                <div>
                    <img src={product_image} alt="Product" className="rounded-2xl  max-w-[200px] h-32 object-cover my-2" />
                </div>

                <div className="text-start">
                    <h2 className="text-lg font-bold">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-semibold">Price: ${price}</p>
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

export default Cart;
