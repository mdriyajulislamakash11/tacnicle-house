import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const ProductCards = () => {
    const data = useLoaderData();
    const { category } = useParams();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{
            data.map( product => <Card key={product.id} product={product}></Card> )
        }</div>
    );
};

export default ProductCards;