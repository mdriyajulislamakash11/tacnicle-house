import { Link } from "react-router-dom";



const Card = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;

   

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl w-full object-cover h-[200px]" />
            </figure>
            <div className="card-body items-start text-start">
                <h2 className="card-title font-bold">{product_title}</h2>
                <p className="my-4">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/product/${product_id}`}
                    className="btn btn-outline text-[#9538E2] rounded-full font-bold">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;